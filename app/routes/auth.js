var passport = require('passport');

module.exports = function(app) {
    app.get('/auth/github', passport.authenticate('github'));
    app.get('/auth/github/callback', passport.authenticate('github', {successRedirect : '/'}));
    app.get('/', function(req, res, next) {
        console.log("TESTE");
        console.log(req.isAuthenticated());
        if(req.isAuthenticated()) {
            //Permite que outras rotas sejam processas
            return next();
        } else {
            //Renderiza  auth.ejs
            res.render("auth");
        }
    });
}