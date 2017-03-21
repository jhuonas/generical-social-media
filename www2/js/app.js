var app = angular.module('app', ['ngRoute', 'feedControler', 'services', 'backand']);

app.run(function($rootScope, SocialMedia){
  console.log("Generical Social Media");

  var objectName = 'friends';

  var objectParam = {
    act: objectName,
    params: {
      pageSize: 20,
      pageNumber: 1
    }
  }
  SocialMedia.get(objectParam, function(response){
    if (!response) {
      console.log("Erro!");
      return false;
    }
    var data = response.data.data;

    console.log("### Friends:", data);
    $rootScope.friends = data;
  });
});

app.config(['$routeProvider', '$locationProvider', 'BackandProvider', function($routeProvider, $locationProvider, BackandProvider) {
  BackandProvider.setAppName('socialmedia');
  BackandProvider.setAnonymousToken('33ea52ac-629b-41cf-8fbf-779686a43062');

  $routeProvider.when('/', {
    controller: "FeedCtrl",
    templateUrl: "templates/feed-list.html",
  }).otherwise({
    redirectTo: '/'
  });
}]);
