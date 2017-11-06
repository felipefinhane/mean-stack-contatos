angular.module('contatooh')
    .controller('ContatoController', function($scope, $routeParams, ContatoService) {
        $scope.mensagem = {texto : ''};

        if($routeParams.contatoId) {
            ContatoService.get(
                {id : $routeParams.contatoId}, 
                function(contato) {
                    $scope.contato = contato;
                },
                function(error) {
                    $scope.mensagem = {
                        texto : 'Não foi possível obter o contato.'
                    };
                    console.log(error);
                }
            );
        } else {
            $scope.contato = new ContatoService();
        }

        $scope.salva = function() {
            $scope.contato.$save()
                .then(function() {
                    $scope.mensagem = {
                        texto : 'Salvo com sucesso!'
                    };
                    $scope.contato = new ContatoService();
                })
                .catch(function(error) {
                    $scope.mensagem = {
                        texto : 'Não foi possível obter o contato.'
                    };
                    console.log(error);
                });
        };
    });