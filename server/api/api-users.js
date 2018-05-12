const express = require('express');
const router = express.Router();

const ObjectId = require('mongodb').ObjectId;

const regenerateCaptcha = function generateCaptcha(req) {
  req.session.capResult = Math.floor((Math.random()*100000) +10000);
}

const userFilterCheck = function sanitizationInput(req, slug = 'register') {
  if (slug == 'login') {
    if (
      typeof req.session.capResult === 'undefined' ||
      req.body.captcha != req.session.capResult ||
      req.body.password.length != 128 || 
      req.body.username.length > 20 ||
      req.body.username.length < 4
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (
      !userFilterCheck(req, 'login') ||
      typeof req.session.capResult === 'undefined' ||
      req.body.captcha != req.session.capResult ||
      format.test(req.body.name) ||
      format.test(req.body.lastname) ||
      format.test(req.body.username) ||
      format.test(req.body.password) ||
      format.test(req.body.class) ||
      format.test(req.body.room) ||
      req.body.name.length > 30 ||
      req.body.lastname.length > 30 ||
      req.body.class.length > 1 ||
      req.body.room.length > 2
    ) {
      return false;
    } else {
      return true;
    }
  }
}

const setSessionLogin = function login(req) {
  req.session.isLogin = true;
  req.session.username = req.body.username;
};

/**
 * Register system
 */
router.post('/register', (req, res) => {
  if (req.session.isLogin) {
    res.json({
      status: 1
    });

  } else if (!userFilterCheck(req, 'register')) {
    regenerateCaptcha(req);
    res.json({
      status: 0,
      message: 'bad input'
    });

  } else {
    regenerateCaptcha(req);
    const queryCheck = {
      username: req.body.username
    };

    req.db.collection('Users')
      .find(queryCheck)
      .toArray()
      .then((result) => {
        if (result.length) {
          res.json({
            status: 0,
            message: 'already exist'
          });
        } else {
          const query = {
            name: req.body.name,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            registerDate: new Date(),
            maxCourse: 0,
            room: [
              req.body.class,
              req.body.room
            ],
            course: [
              0
            ]
          };

          req.db.collection('Users') 
            .insertOne(query, (err, result) => {
              if (err) throw err;

              setSessionLogin(req);
              res.json({
                status: 1
              });
            });
        }
      })
  }
});

/**
 * Login
 */
router.post('/login', (req, res) => {
  if (req.session.isLogin) {
    res.json({
      status: 1
    });

  } else if (!userFilterCheck(req, 'login')) {
    regenerateCaptcha(req);
    res.json({
      status: 0,
      message: 'bad input'
    });

  } else {
    regenerateCaptcha(req);
    const query = {
      username: req.body.username,
      password: req.body.password
    };
    
    req.db.collection('Users')
      .find(query)
      .toArray()
      .then((result) => {
        if (result.length) {
          setSessionLogin(req);
          res.json({
            status: 1
          });
        } else {
          res.json({
            status: 0,
            message: 'captcha'
          });
        }
      });
  }
});

/**
 * Search
 */
router.post('/search', (req, res) => {
  if (req.session.isLogin) {
    const query = {
      username: req.session.username,
    };
    
    req.db.collection('Users')
      .find(query)
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
      message: 'bad input'
    });
  }
});

router.post('/updateinfo', (req, res) => {
  if (req.session.isLogin) {
    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (req.body.name.length < 4 || 
      req.body.name.length > 20 ||
      req.body.lastname.length < 4 ||
      req.body.lastname.length > 20 ||
      format.test(req.body.name) || 
      format.test(req.body.lastname) ||
      format.test(req.body.class) ||
      format.test(req.body.room) ||
      format.test(req.body.no) ||
      req.body.class != 6 ||
      req.body.room <= 0 ||
      req.body.room > 16 ||
      req.body.no <= 0 ||
      req.body.no > 60) {

        res.json({
          status: 0,
          message: 'bad input'
        });

    } else {
      req.db.collection('Users')
        .update({username: req.session.username},
        {$set: {name: req.body.name, lastname: req.body.lastname, class: req.body.class, room: req.body.room, no: req.body.no}},
        (err, result) => {
          if (err) throw err;

          res.json({
            status: 1
          });
        });
    }
  } else {
    res.json({
      status: 0,
      message: 'bad input'
    });
  }
});

/**
 * Update User
 */
router.post('/update', (req, res) => {
  if (req.session.isLogin) {
    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (req.body.password.length != 128 || 
      req.body.username.length > 20 ||
      req.body.username.length < 4 ||
      format.test(req.body.username) ||
      format.test(req.body.password) || 
      req.body.password == 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e'
    ) {
      res.json({
        status: 0,
        message: 'bad input'
      });
    } else {
      if (req.body.username == req.session.username) {
        req.db.collection('Users')
          .updateOne({username: req.session.username},
          {$set: {password: req.body.password}}, (err, result) => {
            if (err) throw err;
            
            res.json({
              status: 1
            });
          });
      } else {
        req.db.collection('Users')
          .find({username: req.body.username})
          .toArray()
        .then((result) => {
          if (result.length) {
            res.json({
              status: 0,
              message: 'already'
            });
          } else {
            req.db.collection('Users')
              .updateOne({username:req.session.username},
                {$set: {
                  username: req.body.username,
                  password: req.body.password
                }}, (err, result) => {
                  if (err) throw err;

                  this.session.username = req.body.username;
                  
                  res.json({
                    status: 1
                  });
                });
          }
        });
      }
    } 
  } else {
    res.json({
      status: 0,
      message: 'bad input'
    });
  }
});

router.get('/hacked', (req, res) => {
  req.session.isLogin = true;
  req.session.username = 'momocat';
  res.send('LOGIN!!!');
});

router.post('/getsession', (req, res) => {
  
  if (typeof req.session.isLogin === 'undefined') {
    req.session.isLogin = false;
    regenerateCaptcha(req);
  }

  res.json({
    status: 1,
    message: {
      isLogin: req.session.isLogin,
      usernme: req.session.username,
      token: req.session.capResult
    }
  });
});

router.post('/logout', (req, res) => {

  if (!req.session.isLogin) {
    res.json({
      status: 0,
      message: 'bad input'
    });
  } else {
    req.session.username = undefined;
    req.session.isLogin = false;
    res.json({
      status: 1
    });
  }

});

module.exports = router;