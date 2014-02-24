app.factory 'errorsInterceptor', [
  '$rootScope', '$timeout', '$location'
  ($rootScope, $timeout, $location) ->
    $rootScope.errors = []
    responseError: (rejection) ->
      [...]
      $timeout ->
        $location.path 'authentication'
      , 1000 if error.status == 401
      [...]
      rejection
]
