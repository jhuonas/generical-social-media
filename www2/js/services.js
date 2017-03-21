var app = angular.module('services', []);

app.service('SocialMedia', function($http, Backand) {
  var baseUrl = '/1/objects/';

  return{
    get: function(param, onSuccess) {
      $http({
        method: 'GET',
        url: Backand.getApiUrl() + baseUrl + param.act,
        params: param.params
      }).then(function(response) {
        onSuccess(response);
      }, function (error) {
        errors(error, function(){
          onSuccess(false);
        });
      });
    },
    post: function(act, data, onSuccess) {
      $http({
        method: 'POST',
        url: Backand.getApiUrl() + baseUrl + act,
        data: data,
        params: {
          returnObject: true
        }
      }).then(function(response) {
        if (response) {
          onSuccess(response);
        }
      }, function (error) {
        errors(error, function(){
          onSuccess(false);
        });
      });
    }
  }

  function errors(data, callback) {
    switch (data.status) {
      case 400 :
      alert('Bad Request');
      break;
      case 401 :
      alert('Authorization Required');
      break;
      case 402 :
      alert('Payment Required (not used yet)');
      break;
      case 403 :
      alert('Forbidden');
      break;
      case 404 :
      alert('Not Found');
      break;
      case 405 :
      alert('Method Not Allowed');
      break;
      case 406 :
      alert('Not Acceptable (encoding)');
      break;
      case 407 :
      alert('Proxy Authentication Required');
      break;
      case 408 :
      alert('Request Timed Out');
      break;
      case 409 :
      alert('Conflicting Request');
      break;
      case 410 :
      alert('Gone');
      break;
      case 411 :
      alert('Content Length Required');
      break;
      case 412 :
      alert('Precondition Failed');
      break;
      case 413 :
      alert('Request Entity Too Long');
      break;
      case 414 :
      alert('Request URI Too Long');
      break;
      case 415 :
      alert('Unsupported Media Type');
      break;
      //Server Errors
      case 500 :
      alert('Internal Server Error');
      break;
      case 501 :
      alert('Not Implemented');
      break;
      case 502 :
      alert('Bad Gateway');
      break;
      case 503 :
      alert('Service Unavailable');
      break;
      case 504 :
      alert('Gateway Timeout');
      break;
      case 505 :
      alert('HTTP Version Not Supported');
      break;
      default :
      alert("Falha ao buscar registros.");
      break;
    }
    callback();
  }

});
