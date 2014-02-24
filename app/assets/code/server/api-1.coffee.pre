express = require 'express'
path = require 'path'

# Configuration
api = express()
api.set 'title', 'Kewl'

# Frontend static files
api.use express.static path.join __dirname, '../public'
api.get '/', (req, res) ->
  res.sendfile 'index.html',
    root: path.join __dirname, '../_client'

# API routes
# Will come later!

# Functions to start and stop the server
api.start = (port = 3333, path, callback) ->
  api.listen port, callback
  console.log 'Server listening at port ' + port
api.stop = (callback) ->
  api.close callback

# Starting our server
api.start()
