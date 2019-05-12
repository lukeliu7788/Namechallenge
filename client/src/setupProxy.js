const proxy = require('http-proxy-middleware')
 

//no need to change when deploy
//when build the project will justfy the build url??
module.exports = function(app) {
    app.use(proxy(['/api/submituser'],
     { target: 'http://localhost:5000' }));
}