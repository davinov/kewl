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

app.config [
  '$routeProvider', '$locationProvider', '$httpProvider'
  ($routeProvider, $locationProvider, $httpProvider) ->
    [...]
    # Register loading intercetor
    $httpProvider.interceptors.push 'loadingInterceptor'
]
