var app = angular.module('app', ['ngRoute', 'feedControler', 'services']);

app.run(function($rootScope, SocialMedia){
  console.log("Generical Social Media");

  SocialMedia.getFriends("friends?pageSize=20&pageNumber=1", function(retorno){
    console.log("Friends:", retorno);

    $rootScope.friends = retorno.data;
    $rootScope.$apply();
  });
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    controller: "FeedCtrl",
    templateUrl: "templates/feed-list.html",
  }).otherwise({
    redirectTo: '/'
  });
}]);
