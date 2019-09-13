//Desarrollado Por Juan Felipe Valencia Murillo.
var app = angular.module('proes', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl:'paginas/inicio.html'
    })
	.when("/proyectos", {
        templateUrl:'paginas/proyectos.html'
    })
	.when("/desarrollador", {
        templateUrl:'paginas/desarrollador.html'
    })
	.otherwise({
        templateUrl:'paginas/pagina_no_encontrada.html'
    });
});