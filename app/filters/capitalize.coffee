app.filter 'capitalize', ->
  (input) ->
    input.charAt(0).toUpperCase() + input.slice(1) if input
