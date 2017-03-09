var app = angular.module('feedControler', []);

app.controller('FeedCtrl', function ($scope, SocialMedia) {
  console.log("FeedCtrl");

  $scope.listStatus = function() {
    SocialMedia.getStatus("status", function(retorno){
      console.log("##### Get list status");

      var allStatus = [];

      for (i in retorno.data) {
        allStatus.push({
          name: retorno.data[i].name,
          text: retorno.data[i].text,
          createdAt: retorno.data[i].createdAt,
          text: retorno.data[i].text,
          friend_name: retorno.data[i].__metadata.descriptives.friend_id.label,
        })
      }

      $scope.status = allStatus;
      $scope.$apply();
    });
  }
  $scope.listStatus();

  $scope.saveNewStatus = function() {
    var data = {
      text: $scope.description,
      friend_id: "6",
    };

    SocialMedia.postStatus("status", JSON.stringify(data), function(retorno){
      console.log("Status:", retorno);

      document.getElementById("form-status").reset();

      $scope.listStatus();
    });
  }
});
