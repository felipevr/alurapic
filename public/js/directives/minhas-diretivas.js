angular.module('minhasDiretivas', [])

	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
	
	.directive('minhaFoto', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@',
			url: '@'
        };

        ddo.templateUrl = 'js/directives/minha-foto.html';
		//ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';   

		return ddo;
	})
	
	.directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '&'
        };
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    })
	
	.directive('meuFocus', function() {
        var ddo = {};
		
        ddo.restrict = "A";
		
        ddo.scope = {
			focado : '='
		};
		
        ddo.link = function(scope, element) {
			scope.$watch('focado', function() {

                // executado toda vez que o valor mudar
                if (scope.focado) {
					// se mudou e é verdadeiro, o elemento deve ganhar o foco
					element[0].focus();
					scope.focado = false;
                } 
            });
        };

        return ddo;
    });
	
	