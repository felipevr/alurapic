// public/js/controllers/foto-controller.js
angular.module('alurapic')
    .controller('FotoController', function($scope, $http, $routeParams) {

        // novidade aqui! Alteramos a criação de recursoFoto!
        var recursoFoto = $resource('/v1/fotos/:fotoId', null, {
            'update' : { 
                method: 'PUT'
            }
        });
		
        $scope.foto = {};
        $scope.mensagem = '';
		
        if($routeParams.fotoId) {
            // busca a foto no servidor
			recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
                $scope.foto = foto; 
            }, function(erro) {
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
				
					recursoFoto.save($scope.foto, function() {
                        $scope.foto = {};
                        $scope.mensagem = 'Foto cadastrada com sucesso';
                    }, function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível cadastrar a foto';
                    });
				}
				
				$scope.formulario.$setPristine();
            }
			
			
        };

    });