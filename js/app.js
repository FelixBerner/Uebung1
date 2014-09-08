'use strict';
var app = angular.module('app', ['ngRoute', 'ngResource']);
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/seite1', {
      templateUrl: 'partials/seite1.html',
      controller: 'InhaltCtrl'
    }).
    when('/seite2', {
      templateUrl: 'partials/seite2.html',
      controller: 'ListeCtr'
    }).
    otherwise({
      redirectTo: '/seite1'
    });
  }
]);
