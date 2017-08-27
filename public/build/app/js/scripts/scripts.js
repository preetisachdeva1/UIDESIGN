/*
    Initialize the app module for application
*/
angular.module('app', [
            'ngRoute'
            ]);
angular
    .module('app')
    .controller('appController', appController);

    function appController($location){  
        
    };


    



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
//Create the controller for home page
angular
    .module('app')
    .controller('homeController', homeController);

// homeController function for home page functionality
function homeController($timeout,$location){
    var home = this;
    console.log("NIce");
    home.records = [ { 
        "Name" : "ABCD",
            "Rank" : 20, "color": "orange"
        },{ 
        "Name" : "Review Ratings",
            "Rank" : 34, "color": "darkblue"
        },{ 
        "Name" : "Recommended %",
            "Rank" : 4.6, "color": "blue"
        },{ 
        "Name" : "TripAdvisor Rank",
            "Rank" : 99, "color": "green-dark"
        }];
    home.guests = [
        {"Name":"A Altarrah", "Description":"Deluxe Double", "Hotel":"Safat, KW"},
        {"Name":"A Altarrah", "Description":"Deluxe Double", "Hotel":"Safat, KW"},
        {"Name":"A Altarrah", "Description":"Deluxe Double", "Hotel":"Safat, KW"},
        {"Name":"A Altarrah", "Description":"Deluxe Double", "Hotel":"Safat, KW"},
        {"Name":"A Altarrah", "Description":"Deluxe Double", "Hotel":"Safat, KW"}];
    home.revenue = [
        {"Day": "30 Days", "Rank":"€,6784"},
        {"Day": "30 Days", "Rank":"€,6784"},
        {"Day": "30 Days", "Rank":"€,6784"},
        {"Day": "30 Days", "Rank":"€,6784"}
    ]
};

//Create the controller for menu directive
angular
    .module('app')
    .controller('menuController', menuController);

function menuController(){
    var menu = this;
    console.log("HIIIIIIIIII");
    menu.menuList =true;
}    


/*
    Creaate the directive for menu header
*/
angular
    .module('app')
	.directive('headerModule', menuModule);

function menuModule(){
	var directive = {
        templateUrl: 'app/shared/header/menuView.html',
        restrict: 'E',
		controller : menuController,
        controllerAs: 'menu'
    };
    return directive;
}

