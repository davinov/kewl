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

app.config [
  '$routeProvider', '$locationProvider', '$httpProvider'
  ($routeProvider, $locationProvider, $httpProvider) ->
    [...]
    # Register intercetors
    $httpProvider.interceptors.push 'loadingInterceptor', 'errorsInterceptor'
]
