var learningPortalApp = angular.module('llpApp', ['ngRoute',,'ngAnimate', 'learningPortalController','clientSideServices','TrainingFilters']);

learningPortalApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'views/_home.html',
		controller: 'homeController'
	})
	.when('/clientTechPage', {
		templateUrl: 'views/_TrainingDetails.html',
		controller: 'clientTechController'
	})
	.when('/serverTechPage', {
		templateUrl: 'views/_TrainingDetails.html',
		controller: 'serverTechController'
	})
	.otherwise({
		redirectTo: '/home'
	});
}])

