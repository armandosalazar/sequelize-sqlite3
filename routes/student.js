const { Router } = require('express');
const { Student } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const students = await Student.findAll();
  res.json(students.map((student) => student.toJSON()));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const student = await Student.findByPk(id);
  res.json(student.toJSON());
});

router.post('/', async (req, res) => {
  const { firstName, lastName, age, grade } = req.body;

  try {
    const student = await Student.create({
      firstName,
      lastName,
      age,
      grade,
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
