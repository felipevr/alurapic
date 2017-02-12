angular.module('alurapic')
	.controller('FotosController', function($scope, $http) {
		
		$scope.fotos = [];
		$scope.filtro = '';

		$http.get('/v1/fotos')
		.success(function(retorno) {
			console.log(retorno);
			$scope.fotos = retorno; // não precisa fazer retorno.data
		})
		.error(function(erro) {
			console.log(erro);
		});
			
		$scope.remover = function(foto) {
				
			$http.delete('/v1/fotos/' + foto._id)
			.success(function() {
				var indiceDaFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceDaFoto, 1);
				$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';

			})
			.error(function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
			});
		};

	});