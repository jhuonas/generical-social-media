var app = angular.module('services', []);

app.service('SocialMedia', function($http) {
  var url = 'https://api.backand.com:443/1/objects/';
  var token = '33ea52ac-629b-41cf-8fbf-779686a43062';

  return{
    getStatus: function(act, onSuccess) {
      $.ajax({
        url: url + act,
        method: 'GET',
        headers: {
          AnonymousToken: token
        },
        success: function(retorno) {
          if (retorno) {
            onSuccess(retorno);
          }
        },
        error: errors
      });
    },
    postStatus: function(act, data, onSuccess) {
      $.ajax({
        url: url + act,
        method: 'POST',
        data: data,
        dataType: 'json',
        headers: {
          AnonymousToken: token
        },
        params: {
          returnObject: true
        },
        success: function(retorno) {
          if (retorno) {
            onSuccess(retorno);
          }
        },
        error: errors
      });
    },
    getFriends: function(act, onSuccess) {
      $.ajax({
        url: url + act,
        method: 'GET',
        headers: {
          AnonymousToken: token
        },
        success: function(retorno) {
          if (retorno) {
            onSuccess(retorno);
          }
        },
        error: errors
      });
    }
  }

  function errors(data) {
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
  }

});
