module.exports = function(app) {
    var controller = app.controllers.contato;

    // app.get('/contatos', controller.listaContatos);
    // app.post('/contatos', controller.listaContatos);

    // app.get('/contatos/:id', controller.obtemContatos);
    // app.delete('/contatos/:id', controller.removeContato);

    app.route('/contatos')
        .get(controller.listaContatos)
        .post(controller.salvaContato);
    
    app.route('/contatos/:id')
        .get(controller.obtemContatos)
        .delete(controller.removeContato);
};