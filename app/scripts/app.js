'use strict';

angular
  .module('ymdosAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/foo', {
        templateUrl: 'views/foo.html',
        controller: 'FooCtrl'
      })
      .when('/foo', {
        templateUrl: 'views/foo.html',
        controller: 'DropCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
