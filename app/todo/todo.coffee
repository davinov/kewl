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
    $scope.refreshToDoList = ->
      $scope.toDoList = ToDoList.query()

    $scope.sendButtonDisabled = false
    $scope.newToDo =
      title: ""
      details: ""

    $scope.addNewToDo = ->
      $scope.sendButtonDisabled = true
      ToDoList.save $scope.newToDo, ->
        $scope.newToDo =
          title: ""
          details: ""
        $scope.sendButtonDisabled = false
        $scope.refreshToDoList()

    $scope.markAsDone = (toDoItem) ->
      ToDoList.delete
        id: toDoItem.id
      , ->
        $scope.refreshToDoList()

    $scope.refreshToDoList() # Load the to-do list for the first time
]

todo.factory 'ToDoList', [
  '$resource'
  ($resource) ->
    $resource 'todo/:id'
]
