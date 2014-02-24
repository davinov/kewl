app.factory 'loadingInterceptor', [
  '$rootScope'
  ($rootScope) ->
    [...]
    responseError: (rejection) ->
      # Do something when recieving an error
      $rootScope.loading--
      rejection
]
