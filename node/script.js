	// create the module 
	var PlanetApp = angular.module('scotchApp', ['ngRoute']);

	// configure routes
	PlanetApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the year page
			.when('/year', {
				templateUrl : 'pages/year.html',
				controller  : 'yearController'
			})

			// route for the radius page
			.when('/radius', {
				templateUrl : 'pages/radius.html',
				controller  : 'radiusController'
			})
			
						// route for the distance page
			.when('/distance', {
				templateUrl : 'pages/distance.html',
				controller  : 'distanceController'
			})

			// route for the temperature page
			.when('/temperature', {
				templateUrl : 'pages/temperature.html',
				controller  : 'temperatureController'
			})

			// route for the name page
			.when('/name',{
				templateUrl : 'pages/name.html',
				controller  : 'nameController'
			})

			// route for the mass page
			.when('/mass', {
				templateUrl : 'pages/mass.html',
				controller  : 'massController'
			})
			// route for the orbit page
			.when('/orbit',{
				templateUrl : 'pages/orbit.html',
				controller  : 'orbitController'
			})

			// route for the neighbors page
			.when('/neighbors', {
				templateUrl : 'pages/neighbors.html',
				controller  : 'neighborsController'
			});
	});

	// create the controller and inject Angular's $scope
	PlanetApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Sleep!';
	});

	PlanetApp.controller('yearController', function($scope) {
	$scope.message = 'More Sleep!';
	});

	PlanetApp.controller('radiusController', function($scope) {
		$scope.message = 'More More Sleep!';
	});
	
		PlanetApp.controller('distanceController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Sleep!';
	});

	PlanetApp.controller('temperatureController', function($scope) {
	$scope.message = 'More Sleep!';
	});

	PlanetApp.controller('nameController', function($scope) {
		$scope.message = 'More More Sleep!';
	});
		PlanetApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Sleep!';
	});

	PlanetApp.controller('massController', function($scope) {
	$scope.message = 'More Sleep!';
	});

	PlanetApp.controller('neighborsController', function($scope) {
		$scope.message = 'More More Sleep!';
	});
