'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', '$controllerProvider', function($urlRouterProvider, $stateProvider, $controllerProvider) {

	angular.module('myApp').controller = $controllerProvider.register;
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'partials/home/home.html'
	});
	
	$stateProvider.state('projects', {
		url: '/projects',
		templateUrl: 'partials/projects/projects.html'
	});
	
	$stateProvider.state('services', {
		url: '/services',
		templateUrl: 'partials/services/services.html'
	});
	
	$stateProvider.state('downloads', {
		url: '/downloads',
		templateUrl: 'partials/downloads/downloads.html'
	});
	
	$stateProvider.state('about', {
		url: '/about',
		templateUrl: 'partials/about/about.html'
	});
	
	$stateProvider.state('contact', {
		url: '/contact',
		templateUrl: 'partials/contact/contact.html'
	});
  
}]);