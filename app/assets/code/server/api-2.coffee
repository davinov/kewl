_ = require "lodash" # Needed for _.find method

# Configuration
api.use express.bodyParser() # Populates req.body

# To do storage
id = 2
toDoList = []

# API routes
api.get '/todo', (req, res, next) ->
  res.send toDoList

api.post '/todo', (req, res, next) ->
  newToDo = req.body
  newToDo.done = false
  id = id + 1
  newToDo.id = id
  toDoList.push newToDo
  res.send newToDo

api.del '/todo/:id', (req, res, next) ->
  toDoItem = _.find toDoList, id: parseInt(req.params.id)
  toDoItem.done = true
  res.send toDoItem
