'use strict'

app = angular.module('kewl', ['ng', 'ngRoute', 'ui.bootstrap', 'kewl.todo'])

app.config [
  '$routeProvider', '$locationProvider', '$httpProvider'
  ($routeProvider, $locationProvider, $httpProvider) ->

    $routeProvider
      .when('/', templateUrl: 'home.html')
      .otherwise(redirectTo: '/')

    # Beautify Urls: remove hashbang #! before routes
    $locationProvider.html5Mode false

    # Allow cross-domain http requests
    delete $httpProvider.defaults.headers.common['X-Requested-With']

    # Register intercetors
    $httpProvider.interceptors.push 'loadingInterceptor', 'errorsInterceptor'
]

app.factory 'loadingInterceptor', [
  '$rootScope'
  ($rootScope) ->
    $rootScope.loading = 0
    request: (request) ->
      # Do something when sending the request
      $rootScope.loading++
      request
    response: (response) ->
      # Do something when recieving the response
      $rootScope.loading--
      response
    responseError: (rejection) ->
      # Do something when recieving an error
      $rootScope.loading--
      rejection
]

app.factory 'errorsInterceptor', [
  '$rootScope', '$timeout'
  ($rootScope, $timeout) ->
    $rootScope.errors = []
    responseError: (rejection) ->
      error =
        status: rejection.status
        message: rejection.data
      $rootScope.errors.push error
      $timeout ->
        $rootScope.errors.shift()
      , 5000
      rejection
]
