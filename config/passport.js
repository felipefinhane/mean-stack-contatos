var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function() {
    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID : '573c16a5fe4529b66769',
        clientSecret : '11019a53a2f61a7902f828486ecef16bd1c4772a',
        callbackURL : 'http://localhost:3000/auth/github/callback'
    }, function (accessToken, refreshToken, profile, done) {
        Usuario.findOrCreate(
            {"login" : profile.username},
            {"nome" : profile.username},
            function(error, usuario) {
                if(error) {
                    console.log(error);
                    return done(error);
                }
                return done(null, usuario);
            }
        )
    }));

    /**
     * Chamado apenas UMA vez e recebe o usuário  do nosso
     * banco  disponibilizado pelo callback da estratégia de 
     * autenticação. Realizará a serialização  apenas do 
     * ObjectID do usuário na sessão.
     */
    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });

    /**
     * Recebe  o ObjectID do usuário armazenado na sessão
     * Chamado a CADA requisição
     */
    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
            .then(function(usuario) {
                done(null, usuario);
            });
    });
}