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

    # Register loading intercetor
    $httpProvider.interceptors.push 'loadingInterceptor'
]

app.factory 'loadingInterceptor', [
  '$rootScope'
  ($rootScope) ->
    request: (request) ->
      # Do something when sending the request
      $rootScope.loading = true
      request
    response: (response) ->
      # Do something when recieving the response
      $rootScope.loading = false
      response
]

