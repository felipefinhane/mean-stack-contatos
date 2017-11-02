angular.module('contatooh')
    .controller('ContatosController', function($scope) {
        $scope.total = 0;
        $scope.filtro = '';

        $scope.contatos = [
            {_id : 1, nome : 'Contato Exemplo 1', email : 'cont1@empresa.com.br'},
            {_id : 2, nome : 'Contato Exemplo 2', email : 'cont2@empresa.com.br'},
            {_id : 3, nome : 'Contato Exemplo 3', email : 'cont3@empresa.com.br'},
            {_id : 4, nome : 'Contato Exemplo 4', email : 'cont4@empresa.com.br'},
            {_id : 5, nome : 'Contato Exemplo 5', email : 'cont5@empresa.com.br'},
            {_id : 6, nome : 'Contato Exemplo 6', email : 'cont6@empresa.com.br'},
        ];

        $scope.incrementa = function(){
            $scope.total++;
        };
    });