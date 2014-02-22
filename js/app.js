'use strict';
var app;

app = angular.module('kewl', ['ng', 'ngRoute', 'ui.bootstrap', 'kewl.todo']);

app.config([
  '$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home.html'
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
;'use strict';
var todo;

todo = angular.module('kewl.todo', ['ng', 'ngRoute', 'ui.bootstrap', 'ngResource']);

todo.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/todo', {
      templateUrl: 'todo/todo.html',
      controller: 'toDoController'
    });
  }
]);

todo.controller('toDoController', [
  '$scope', 'ToDoList', function($scope, ToDoList) {
    return $scope.toDoList = ToDoList.query();
  }
]);

todo.factory('ToDoList', [
  '$resource', function($resource) {
    return $resource('todo/:id');
  }
]);
;
//# sourceMappingURL=app.js.map