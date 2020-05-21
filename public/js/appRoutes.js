angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

    // home page
    .when("/", {
      templateUrl: "views/home.html",
      controller: "MainController",
    })

    .when("/contact", {
      templateUrl: "views/nerd.html",
      controller: "NerdController",
    })

    .when("/aboutcompany", {
      templateUrl: "views/aboutcompany.html",
      controller: "GeekController",
	})
	.when("/pvtltd", {
      templateUrl: "views/pvtltd.html",
      controller: "GeekController",
    });

	$locationProvider.html5Mode(true);

}]);