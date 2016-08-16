module.exports = function(app) {
  // MIDDLEWARE FOR ROUTING
  // var index = require('../controllers/index.server.controller');
  // var about = require('../controllers/about.server.controller');
  // var contact = require('../controllers/contact.server.controller');

  // var staticPageController = require('../controllers/staticpage.server.controller');

  var usersController = require('../controllers/users.server.controller');

  // ACTUAL ROUTING
  // static page routes
  // app.get('/', staticPageController.renderHome);
  // app.get('/about', staticPageController.renderAbout);
  // app.get('/contact', staticPageController.renderContact);

  // restful routes
  app.get('/nick', usersController.index);
 };
