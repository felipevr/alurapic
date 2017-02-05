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
	});