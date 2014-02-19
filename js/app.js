'use strict';
var app;

app = angular.module('skeleton', ['ng', 'ngRoute', 'ui.bootstrap', 'partials']);

app.config([
  '$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
      templateUrl: '/partials/home.html'
    }).otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(false);
    return delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
]);
;app.filter('capitalize', function() {
  return function(input) {
    if (input) {
      return input.charAt(0).toUpperCase() + input.slice(1);
    }
  };
});
;
//# sourceMappingURL=app.js.map