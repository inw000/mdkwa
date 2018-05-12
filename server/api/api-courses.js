const express = require('express');
const router = express.Router();

const ObjectId = require('mongodb').ObjectId;

/**
 * Get course
 */
router.post('/courses', (req, res) => {
  if (req.session.isLogin) {
    if (typeof req.body.where === 'undefined') {
      var where = {};
    } else {
      var where = { courseLevel: req.body.where };
    }

    req.db.collection('Courses')
      .find(where)
      .toArray()
      .then((result) => {
        res.json({
          status: 1,
          message: result
        });
      });

  } else {
    res.json({
      status: 0,
      message: 'permission'
    });
  }
});

/**
 * Get Problem
 */
router.post('/problem', (req, res) => {
  if (req.session.isLogin) {
    var where = { level: req.body.where };

    req.db.collection('Problems')
      .find(where)
      .toArray()
      .then((result) => {
        res.json({
          status: 1,
          message: result
        });
      })
  } else {
    res.json({
      status: 0,
      message: 'permission'
    });
  }
});

/**
 * Check answer
 */
router.post('/answer', (req, res) => {
  if (req.session.isLogin && req.body.where.length == 1) {
    var where = { level: req.body.where };

    req.db.collection('Problems')
      .find(where)
      .toArray()
    .then((result) => {
      if (result.length) {
        let i = 0;
        let score = 0;
        let done = false;

        result[0].problems.forEach((element) => {
          if (!done && element.problemCorrect == req.body.answer[i]) {
            ++score;
          }
          ++i;

          if (i >= result[0].max) {
            done = true;
          }
        });
        
        while(1) {
          if (done) {

            req.db.collection('Users')
              .find({ username: req.session.username })
              .toArray()
            .then((userResult) => {
              if (userResult[0].courseTime[req.body.where] >= 10 && result[0].open) {
                res.json({
                  status: 0,
                  message: 'too'
                });
              } 
              else if (score > userResult[0].course[req.body.where] && result[0].open) {
                
                set = {};
                set['course.' + req.body.where] = score;
                set['courseTime.' + req.body.where] = userResult[0].courseTime[req.body.where] + 1;
                
                req.db.collection('Users')
                  .updateOne(
                    { username: req.session.username },
                    { $set: set }, (err, cursor) => {
                      if (err) throw err;

                      res.send({
                        status: 1,
                        ans: score,
                        newhigh: true
                      });
                    });
                  

              } else {

                if (!result[0].open) {

                  res.send({
                    status: 1,
                    ans: score,
                    newhigh: false
                  });

                } else {
                
                  set = {};
                  set['courseTime.' + req.body.where] = userResult[0].courseTime[req.body.where] + 1;
                  
                  req.db.collection('Users')
                    .updateOne(
                      { username: req.session.username },
                      { $set: set }, (err, cursor) => {
                        if (err) throw err;

                        res.send({
                          status: 1,
                          ans: score,
                          newhigh: false
                        });
                      });
                }
              }
            });
            break;
          } 
        }
      } else {
        res.json({
          status: 0,
          message: 'permission2'
        });
      }
    });

  } else {
    res.json({
      status: 0,
      message: 'permission1'
    });
  }
});

module.exports = router;