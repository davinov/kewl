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
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    return $httpProvider.interceptors.push('loadingInterceptor', 'errorsInterceptor');
  }
]);

app.factory('loadingInterceptor', [
  '$rootScope', function($rootScope) {
    $rootScope.loading = 0;
    return {
      request: function(request) {
        $rootScope.loading++;
        return request;
      },
      response: function(response) {
        $rootScope.loading--;
        return response;
      },
      responseError: function(rejection) {
        $rootScope.loading--;
        return rejection;
      }
    };
  }
]);

app.factory('errorsInterceptor', [
  '$rootScope', '$timeout', function($rootScope, $timeout) {
    $rootScope.errors = [];
    return {
      responseError: function(rejection) {
        var error;
        error = {
          status: rejection.status,
          message: rejection.data
        };
        $rootScope.errors.push(error);
        $timeout(function() {
          return $rootScope.errors.shift();
        }, 5000);
        return rejection;
      }
    };
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
    $scope.refreshToDoList = function() {
      return ToDoList.query(function(response) {
        return $scope.toDoList = response;
      });
    };
    $scope.sendButtonDisabled = false;
    $scope.newToDo = {
      title: "",
      details: ""
    };
    $scope.addNewToDo = function() {
      $scope.sendButtonDisabled = true;
      return ToDoList.save($scope.newToDo, function() {
        $scope.newToDo = {
          title: "",
          details: ""
        };
        $scope.sendButtonDisabled = false;
        return $scope.refreshToDoList();
      });
    };
    $scope.markAsDone = function(toDoItem) {
      return ToDoList["delete"]({
        id: toDoItem.id
      }, function() {
        return $scope.refreshToDoList();
      });
    };
    return $scope.refreshToDoList();
  }
]);

todo.factory('ToDoList', [
  '$resource', function($resource) {
    return $resource('todo/:id');
  }
]);
;
//# sourceMappingURL=app.js.map