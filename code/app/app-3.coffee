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
]
