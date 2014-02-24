auth = angular.module 'kewl.authentication', ['ng', 'ngRoute', 'ui.bootstrap']

auth.config [
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider
    .when '/authentication', templateUrl: 'authentication/authentication.html', controller: 'authenticationController'

]

auth.controller 'authenticationController', [
  '$scope', '$http', '$timeout'
  ($scope, $http, $timeout) ->
    $scope.messages = []
    displayMessage = (message) ->
      $scope.messages.push message
      $timeout ->
        $scope.messages.shift()
      , 2500

    $scope.login = ->
      $http
        method: 'GET'
        url: 'login'
      .success displayMessage

    $scope.logout = ->
      $http
        method: 'GET'
        url: 'logout'
      .success displayMessage
]
