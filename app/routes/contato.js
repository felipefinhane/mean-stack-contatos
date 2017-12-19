var verificaAutenticacao = require('../../config/auth');

module.exports = function(app) {
    var controller = app.controllers.contato;

    // app.get('/contatos', controller.listaContatos);
    // app.post('/contatos', controller.listaContatos);

    // app.get('/contatos/:id', controller.obtemContatos);
    // app.delete('/contatos/:id', controller.removeContato);

    app.route('/contatos')
        .get(verificaAutenticacao, controller.listaTodos)
        .post(verificaAutenticacao, controller.salvaContato);
    
    app.route('/contatos/:id')
        .get(verificaAutenticacao, controller.obtemContatos)
        .delete(verificaAutenticacao, controller.removeContato);
};