var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('5a243cfce6298997f63bde48');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', function(error, db){
    if(error) throw err;
    db.collection('contatos').findOne(
        {_id:_idProcurado},
        function(error, contato){
            if(error) throw err;
            console.log(contato);
        }
    );
});