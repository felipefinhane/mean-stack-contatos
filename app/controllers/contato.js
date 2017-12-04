module.exports = function (app) {
    var Contato =  app.models.contato;

    var controller = {};

    controller.listaTodos = function(req, res) {
        var promise  = Contato.find().exec()
            .then(
                function(contatos) {
                    res.json(contatos);
                },
                function(error) {
                    console.log(error);
                    res.status(500).json(error);
                }
            );
    };

    controller.obtemContatos = function(req, res) {
        var _id = req.params.id;
        Contato.findById(_id).exec()
            .then(
                function(contato) {
                    if(!contato) throw new Error("Contato não encontrato.");
                    res.json(contato);
                },
                function(error) {
                    console.log(error);
                    res.status(404).json(error);
                }
            );
    };

    controller.removeContato = function(req, res) {
        var _id = req.params.id;
        Contato.remove({"_id" : _id}).exec()
            .then(
                function() {
                    res.end();
                },
                function(error) {
                    return console.log(error);
                }
            );
    };

    controller.salvaContato = function(req, res) {
        var _id = req.body._id;
        if (_id) {
            Contato.findByIdAndUpdate(_id, req.body).exec()
                .then(
                    function(contato) {
                        res.json(contato);
                    },
                    function(error) {
                        console.log(error);
                        res.status(500).json(error);
                    }
                );
        } else {
            Contato.create(req.body)
                .then(
                    function(contato) {
                        res.status(201).json(contato);
                    },
                    function(error) {
                        console.log(error);
                        res.status(500).json(error);
                    }
                );
        }
    };

    return controller;
}