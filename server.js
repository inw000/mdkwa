const path = require('path');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');

const flag = require('./server/lib/flag.js');
const clear = require('./server/lib/clear.js')();

var app = require('./server/config/config.js')(
  expressMongoDb, 
  flag, 
  bodyParser,
  path
);

const customRoute = require('./server/routes/customRoute.js')(app, path, flag);
const mainRoute = require('./server/routes/mainRoute.js')(app, path, flag);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  flag.green('Ready', 'Everything is done right now! Server is started at ' + port);
});

