# Configuration
[...]
api.use express.cookieParser()
api.use express.cookieSession
  secret: 'thisIsNotSoSecret'

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
  [...]

api.post '/todo', ensureAuthenticated, waitOneSecond, (req, res, next) ->
  [...]

api.del '/todo/:id', ensureAuthenticated, waitOneSecond, (req, res, next) ->
  [...]
