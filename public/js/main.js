angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider,  $locationProvider) {
		
		$locationProvider.html5Mode(true);

		$routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });
		
        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        // novidade aqui! Nova rota!
        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });
		
		/*$routeProvider.when('/produtos/:produtoId', function() {
            templateUrl: 'partials/produto.html',
            controller: 'ProdutoController'			
		});*/
	
        $routeProvider.otherwise({redirectTo: '/fotos'});
		
    });