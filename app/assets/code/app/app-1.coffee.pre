$provide.factory 'myHttpInterceptor', ->
  request: (request) ->
    # Do something when sending the request
    request

  response: (response) ->
    # Do something when recieving the response
    response

$httpProvider.interceptors.push 'myHttpInterceptor'
