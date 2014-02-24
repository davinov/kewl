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
