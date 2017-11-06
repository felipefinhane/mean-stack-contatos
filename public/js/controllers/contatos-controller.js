angular.module('contatooh')
    .controller('ContatosController', function($scope, ContatoService) {
        $scope.contatos = [];
        $scope.filtro = '';
        $scope.mensagem = {texto : ''};

        $scope.remove = function(contato) {
            ContatoService.delete(
                {id : contato._id},
                buscarContatos,
                function(error) {
                    $scope.mensagem = {
                        texto : "Não foi possível remover o contato."
                    };
                    console.log(error)
                }
            );
        };

        function buscarContatos() {    
            ContatoService.query(
                function(contatos) {
                    $scope.contatos = contatos
                },
                function(error) {
                    $scope.mensagem = {
                        texto : "Não foi possível obter a lista de contatos."
                    };
                    console.log(error);
                }
            );
        };
        buscarContatos();
    });