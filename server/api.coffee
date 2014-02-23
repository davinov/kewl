express = require 'express'
path = require 'path'
_ = require 'lodash'

# Configuration
api = express()
api.set 'title', 'Kewl'
api.use express.bodyParser()
api.use express.cookieParser()
api.use express.cookieSession
  secret: 'thisIsNotSoSecret'

# Frontend static files
api.use express.static path.join __dirname, '../public'
api.get '/', (req, res) ->
  res.sendfile 'index.html',
    root: path.join __dirname, '../_client'

# To do storage
id = 3
toDoList = [
  id: 0
  title: 'Buy chocolates'
  details: 'Prefer the ones without liquor'
  done: false
,
  id: 1
  title: 'Buy flowers'
  details: 'She prefers yellow ones'
  done: false
,
  id: 2
  title: 'Write a note'
  details: 'To be put in the flowers'
  done: true
]

# Simulate network latency
waitOneSecond = (req, res, next) ->
  setTimeout next, 1000

# Authentification management
api.get '/login', (req, res, next) ->
  req.session = 'logged in'
  res.send 'You are authenticated'

api.get '/logout', (req, res, next) ->
  req.session = null
  res.send 'You successfully logged out'

ensureAuthenticated = (req, res, next) ->
  return res.send 401, 'You need to log in first' if req.session != 'logged in'
  next()

# API routes

api.get '/todo', ensureAuthenticated, waitOneSecond, (req, res, next) ->
  res.send toDoList

api.post '/todo', ensureAuthenticated, waitOneSecond, (req, res, next) ->
  newToDo = req.body
  newToDo.done = false
  id = id+1
  newToDo.id = id
  toDoList.push newToDo
  res.send newToDo

api.del '/todo/:id', ensureAuthenticated, waitOneSecond, (req, res, next) ->
  toDoItem = _.find toDoList, id: parseInt(req.params.id)
  return res.send 404, 'No task with the id ' + req.params.id if not toDoItem
  return res.send 400, 'This task is already done' if toDoItem.done
  toDoItem.done = true
  res.send toDoItem

api.start = (port = 3333, path, callback) ->
  api.listen port, callback
  console.log 'Server listening at port ' + port

api.stop = (callback) ->
  api.close callback

module.exports = api
