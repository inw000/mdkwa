/**
 * Cutom Route
 * custom route middleware
 * 
 * @param {*} app : express instance
 * @param {*} path : path instance
 * @param {*} flag : flag instance
 */
module.exports = function onInit(app, path, flag) {
  flag.yellow('Pending', 'custom route ...');
  
  app.use('/api', require('../api/api-users.js'));
  app.use('/api', require('../api/api-courses.js'));

  flag.green('Success', 'custom route');
}