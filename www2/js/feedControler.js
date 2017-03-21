var app = angular.module('feedControler', []);

app.controller('FeedCtrl', function ($scope, SocialMedia) {
  console.log("FeedCtrl");

  var objectName = 'status';
  $scope.pageSize = 10;
  $scope.pageNumber = 1;

  $scope.listStatus = function () {
    $scope.loading = true;

    var objectParam = {
      act: objectName,
      params: {
        pageSize: $scope.pageSize,
        pageNumber: $scope.pageNumber,
        sort: [{"fieldName":"createdAt","order":"desc"}]
      }
    }

    SocialMedia.get(objectParam, function(response){
      $scope.loading = false;

      if (!response) {
        console.log("Erro!");
        return false;
      }

      var data = response.data.data;
      console.log("### Status", data);
      $scope.pageLength = Math.ceil(response.data.totalRows / $scope.pageSize);
      $scope.counter = Array;

      for (i in data) {
        data[i].friend_name = data[i].__metadata.descriptives.friend_id.label;
      }

      $scope.status = data;

      var phase = $scope.$$phase;
      if (phase != '$apply' && phase != '$digest') {
        $scope.$apply();
      }
    });
  };
  $scope.listStatus();
  
  $scope.changePage = function (pageNumber) {
    if (pageNumber < 1 || pageNumber > $scope.pageLength) {
      return false;
    }

    $scope.pageNumber = pageNumber;
    $scope.listStatus();
  }

  $scope.saveNewStatus = function() {
    var data = {
      text: $scope.description,
      friend_id: "8",
    };

    SocialMedia.post(objectName, JSON.stringify(data), function(response){
      document.getElementById("form-status").reset();

      $scope.pageNumber = 1;
      $scope.listStatus();
    });
  }
});
