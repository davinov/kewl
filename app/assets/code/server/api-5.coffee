api.del '/todo/:id', waitOneSecond, (req, res, next) ->
  toDoItem = _.find toDoList, id: parseInt(req.params.id)
  return res.send 404, 'No task with the id ' + req.params.id if !toDoItem
  [...]
