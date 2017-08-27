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
