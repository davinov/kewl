# Simulate network latency
waitOneSecond = (req, res, next) ->
  setTimeout next, 1000

# API routes
api.get '/todo', waitOneSecond, (req, res, next) ->
  res.send toDoList

api.post '/todo', waitOneSecond, (req, res, next) ->
  [...]
  res.send newToDo

api.del '/todo/:id', waitOneSecond, (req, res, next) ->
  toDoItem = _.find toDoList, id: parseInt(req.params.id)
  [...]
  res.send toDoItem
