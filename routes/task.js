const { Router } = require('express');
const { Task } = require('../models');

module.exports = Router()
  .get('/', [
    function (req, res, next) {
      // Do something
      next();
    },
    async function (req, res, next) {
      // Do something
      const { error } = req.body;
      if (!error) {
        const tasks = await Task.findAll();
        return res.json(tasks.map((task) => task.toJSON()));
      }
      next();
    },
  ])
  .get('/:id', async function (req, res, next) {
    // Do something
    const { id } = req.params;
    // res.json({ message: `Hello World! ${id}` });
    const task = await Task.findByPk(id);
    console.log(task.toJSON());
    res.json(task.toJSON());
  })
  .post('/', async function (req, res, next) {
    // Do something
    const { title, description, studentId, completed } = req.body;
    const task = new Task({
      title,
      description,
      completed,
      studentId,
    });
    await task.save();
    console.log(task.toJSON());
    res.json(task.toJSON());
  })
  .put('/:id', async function (req, res, next) {
    // Do something
    const { id } = req.params;
    const { title, description, studentId, completed } = req.body;
    const status = await Task.update(
      {
        title,
        description,
        completed,
        studentId,
      },
      {
        where: {
          id,
        },
      }
    );
    if (status[0]) {
      res.json({ status });
    }
    next();
  })
  .delete('/:id', async function (req, res, next) {
    // Do something
    const { id } = req.params;

    const rows = await Task.destroy({
      where: { id },
    });

    if (!rows[0]) {
      return res.json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  });
