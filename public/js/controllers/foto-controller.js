// public/js/controllers/foto-controller.js
angular.module('alurapic')
    .controller('FotoController', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {
		
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

				cadastroDeFotos.cadastrar($scope.foto)
					.then(function(dados) {
						$scope.mensagem = dados.mensagem;
						if (dados.inclusao) $scope.foto = {};
						
						// novidade aqui! 
						$scope.$broadcast('fotoCadastrada');
					
						$scope.formulario.$setPristine();
					})
					.catch(function(erro) {
						$scope.mensagem = erro.mensagem;
					});
            }
			
			
        };

    });