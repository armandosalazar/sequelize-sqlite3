const { Router } = require('express');
const taskRouter = require('./task');

module.exports = Router()
  .use('/task', taskRouter)
  .use('/student', require('./student'));
