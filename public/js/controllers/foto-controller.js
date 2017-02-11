// public/js/controllers/foto-controller.js
angular.module('alurapic')
    .controller('FotoController', function($scope, $http) {

        $scope.foto = {};
        $scope.mensagem = '';
		
		$scope.submeter = function() {
            
			if ($scope.formulario.$valid) {

                $http.post('/v1/fotos', $scope.foto)
                .success(function() {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                    //console.log('Foto adicionada com sucesso');
                })
                .error(function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'N�o foi poss�vel cadastrar a foto';
                })
            }
			
			
        };

    });