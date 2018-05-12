/**
 * Configuration 
 * config setting
 * 
 * External Arguements:
 * @param {*} expressMongoDb : express-mongo-db instance
 * @param {*} flag : flag instance
 * @param {*} bodyParser : bodyParser instance
 * @param {*} path ; path instance
 * 
 * Internal Arguments:
 * @param {*} express : express instance
 * @param {String} mongoString : mongodb connection string
 */
const express = require('express');
const mongoString = 'mongodb://momocat:NemoInw000@ds119070.mlab.com:19070/biology';

var session = require('express-session');

module.exports = function onInit(expressMongoDb, flag, bodyParser, path) {
  var app = express();

  flag.yellow('Pending', 'config');
  app.use(expressMongoDb(mongoString));

  app.use(
    express.static(
      path.join(__dirname, '../../dist')
    )
  );

  app.use(session({
    secret: 'ks9(_S2ek1ok_axamif_wkd',
    cookie: {
      maxAge: 1000*100000
    },
    resave: false,
    saveUninitialized: false
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  flag.green('Success', 'config');

  return app;
}
