api.del '/todo/:id', waitOneSecond, (req, res, next) ->
  toDoItem = _.find toDoList, id: parseInt(req.params.id)
  return res.send 400, 'This task is already done' if toDoItem.done
  [...]
