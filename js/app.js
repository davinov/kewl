'use strict';
var app;

app = angular.module('kewl', ['ng', 'ngRoute', 'ui.bootstrap', 'hljs', 'kewl.todo', 'kewl.authentication']);

app.config([
  '$routeProvider', '$locationProvider', '$httpProvider', 'hljsServiceProvider', function($routeProvider, $locationProvider, $httpProvider, hljsServiceProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home.html'
    }).when('/walkthrough', {
      templateUrl: 'walkthrough.html'
    }).otherwise({
      redirectTo: '/'
    });
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push('loadingInterceptor', 'errorsInterceptor');
    return hljsServiceProvider.setOptions({
      tabReplace: '  '
    });
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
  '$rootScope', '$timeout', '$location', function($rootScope, $timeout, $location) {
    $rootScope.errors = [];
    return {
      responseError: function(rejection) {
        var error;
        error = {
          status: rejection.status,
          message: rejection.data
        };
        if (error.status === 404) {
          error.message = 'The server is not running or your request\'s target is not found';
        }
        $rootScope.errors.push(error);
        if (error.status === 401) {
          $timeout(function() {
            return $location.path('authentication');
          }, 1000);
        }
        $timeout(function() {
          return $rootScope.errors.shift();
        }, 5000);
        return rejection;
      }
    };
  }
]);
;'use strict';
var auth;

auth = angular.module('kewl.authentication', ['ng', 'ngRoute', 'ui.bootstrap']);

auth.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/authentication', {
      templateUrl: 'authentication/authentication.html',
      controller: 'authenticationController'
    });
  }
]);

auth.controller('authenticationController', [
  '$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    var displayMessage;
    $scope.messages = [];
    displayMessage = function(message) {
      $scope.messages.push(message);
      return $timeout(function() {
        return $scope.messages.shift();
      }, 2500);
    };
    $scope.login = function() {
      return $http({
        method: 'GET',
        url: 'login'
      }).success(displayMessage);
    };
    return $scope.logout = function() {
      return $http({
        method: 'GET',
        url: 'logout'
      }).success(displayMessage);
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