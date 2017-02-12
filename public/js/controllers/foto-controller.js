// public/js/controllers/foto-controller.js
angular.module('alurapic')
    .controller('FotoController', function($scope, $http, $routeParams) {

        $scope.foto = {};
        $scope.mensagem = '';
		
        if($routeParams.fotoId) {
            // busca a foto no servidor
			$http.get('/v1/fotos/' + $routeParams.fotoId)
            .success(function(foto) {
                $scope.foto = foto;
            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            });
        }
		
		$scope.submeter = function() {
            
			if ($scope.formulario.$valid) {

				if($routeParams.fotoId) {

					$http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
					.success(function() {
						$scope.mensagem = 'Foto alterada com sucesso';

					})
					.error(function(erro) {
						console.log(erro);
						$scope.mensagem = 'Não foi possível alterar';
					});

				} else {     
					$http.post('/v1/fotos', $scope.foto)
					.success(function() {
						$scope.foto = {};
						$scope.mensagem = 'Foto cadastrada com sucesso';
						//console.log('Foto adicionada com sucesso');
					})
					.error(function(erro) {
						console.log(erro);
						$scope.mensagem = 'Não foi possível cadastrar a foto';
					});
				}
            }
			
			
        };

    });