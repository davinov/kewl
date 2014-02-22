'use strict'

todo = angular.module 'kewl.todo', ['ng', 'ngRoute', 'ui.bootstrap', 'ngResource']

todo.config [
  '$routeProvider'
  ($routeProvider) ->

    $routeProvider
      .when '/todo', templateUrl: 'todo/todo.html', controller: 'toDoController'

]

todo.controller 'toDoController', [
  '$scope', 'ToDoList'
  ($scope, ToDoList) ->
    $scope.toDoList = ToDoList.query()
]

todo.factory 'ToDoList', [
  '$resource'
  ($resource) ->
    $resource 'todo/:id'
]
