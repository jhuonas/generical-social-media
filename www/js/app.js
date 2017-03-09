var app = angular.module('app', ['ngRoute', 'feedControler']);

app.run(function($location, $route, $rootScope){
  console.log("Generical Social Media");

});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    controller: "FeedCtrl",
    templateUrl: "templates/feed-list.html",
  }).otherwise({
    redirectTo: '/'
  });
}]);
