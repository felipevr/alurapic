// public/js/controllers/grupos-controller.js

angular.module('alurapic')
    .controller('GruposController', ['$scope', '$http', function($scope, $http) {

		$scope.grupos = [];    

		$http.get('/v1/grupos')
		.success(function(grupos) {
			$scope.grupos = grupos;
		})
		.error(function(erro) {
			console.log(erro);
		});
	
    }]);