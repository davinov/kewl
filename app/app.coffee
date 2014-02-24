'use strict'

app = angular.module 'kewl', ['ng', 'ngRoute', 'ui.bootstrap', 'hljs', 'kewl.todo', 'kewl.authentication']

app.config [
  '$routeProvider', '$locationProvider', '$httpProvider', 'hljsServiceProvider'
  ($routeProvider, $locationProvider, $httpProvider, hljsServiceProvider) ->

    $routeProvider
      .when('/', templateUrl: 'home.html')
      .when('/walkthrough', templateUrl: 'walkthrough.html')
      .otherwise(redirectTo: '/')

    # Allow cross-domain http requests
    delete $httpProvider.defaults.headers.common['X-Requested-With']

    # Register intercetors
    $httpProvider.interceptors.push 'loadingInterceptor', 'errorsInterceptor'

    hljsServiceProvider.setOptions
      tabReplace: '  '
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
  '$rootScope', '$timeout', '$location'
  ($rootScope, $timeout, $location) ->
    $rootScope.errors = []
    responseError: (rejection) ->
      error =
        status: rejection.status
        message: rejection.data
      error.message = 'The server is not running or your request\'s target is not found' if error.status == 404
      $rootScope.errors.push error
      $timeout ->
        $location.path 'authentication'
      , 1000 if error.status == 401
      $timeout ->
        $rootScope.errors.shift()
      , 5000
      rejection
]
