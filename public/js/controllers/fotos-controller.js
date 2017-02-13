angular.module('alurapic')
	.controller('FotosController', function($scope, $resource) {
		
		// novidade aqui! Criando o recurso
		var recursoFoto = $resource('/v1/fotos/:fotoId');
		
		$scope.fotos = [];
		$scope.filtro = '';

		// novidade aqui! Saiu $http.get!
		recursoFoto.query(function(fotos) {
			$scope.fotos = fotos;
		}, function(erro) {
			console.log(erro);
		});
		
		$scope.remover = function(foto) {
				
			 // novidade aqui!
			recursoFoto.delete({fotoId: foto._id}, function() {
				var indiceDaFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceDaFoto, 1);
				$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
			});
		};

	});