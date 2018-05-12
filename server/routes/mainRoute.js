/**
 * Main Route
 * main route will get called first
 * 
 * @param {*} app : express instance
 * @param {*} path : path instance
 * @param {*} flag : flag instance
 */
module.exports = function onInit(app, path, flag) {
  flag.yellow('Pending', 'main route ...');
  app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });

  flag.green('Success', 'main route');
}