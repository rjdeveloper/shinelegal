	var shineApp = angular.module("shineApp", ["ngRoute"]).config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $routeProvider

      // home page
      .when("/", {
        templateUrl: "views/home.html",
        controller: "mainController",
      })

      .when("/contact", {
        templateUrl: "views/contact.html",
        controller: "mainController",
      })

      .when("/aboutcompany", {
        templateUrl: "views/aboutcompany.html",
        controller: "mainController",
      })
      .when("/privatelimitedcompany", {
        templateUrl: "views/pvtltd.html",
        controller: "mainController",
      })
      .when("/bog", {
        templateUrl: "partials/blog.html",
        controller: "mainController",
      })
      .otherwise({
        templateUrl: "views/home.html",
        controller: "mainController",
      });

    $locationProvider.html5Mode(true);
  },
]).controller("mainController", function ($scope) {
    // create a message to display in our view
    $scope.message = "Everyone come and see how good I look!";
  });
