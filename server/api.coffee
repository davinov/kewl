express = require 'express'
path = require 'path'
_ = require 'lodash'

# Configuration
api = express()
api.set 'title', 'Kewl'
api.use express.bodyParser()

# Frontend static files
api.use express.static path.join __dirname, '../public'
api.get '/', (req, res) ->
  res.sendfile 'index.html',
    root: path.join __dirname, '../_client'

# To do storage
id = 3
toDo = [
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

# API routes

api.get '/todo', (req, res, next) ->
  res.send toDo

api.post '/todo', (req, res, next) ->
  newToDo = req.body
  newToDo.done = false
  id = id+1
  newToDo.id = id
  toDo.push newToDo
  res.send newToDo

api.del '/todo/:id', (req, res, next) ->
  toDoItem = _.find toDo, id: parseInt(req.params.id)
  toDoItem.done = true
  res.send toDoItem


api.start = (port = 3333, path, callback) ->
  api.listen port, callback
  console.log 'Server listening at port ' + port

api.stop = (callback) ->
  api.close callback

module.exports = api
