// public/js/controllers/produto-controller.js
angular.module('alurapic')
    .controller('ProdutoController', function($scope, $http, $routeParams) {

        $scope.produto = {};
        $scope.mensagem = '';
		
        if($routeParams.produtoId) {

			console.log($routeParams.produtoId);
		
            // busca a produto no servidor
			/*$http.get('/v1/produtos/' + $routeParams.produtoId)
            .success(function(produto) {
                $scope.produto = produto;
            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter o produto'
            });*/
        }
		

    });