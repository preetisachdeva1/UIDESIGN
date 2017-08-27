/*
     Initialize the routing in config function
 */

angular
    .module('app')
    .config(config);

function config($routeProvider,$locationProvider) {
   $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/homeView.html',
            controller: 'homeController',
            controllerAs: 'home'
        })
        .otherwise({redirectTo: '/'});
   $locationProvider.html5Mode(false);
}