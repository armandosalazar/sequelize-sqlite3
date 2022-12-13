const { Router } = require('express');
const { Student } = require('../models');

module.exports = Router().post('/', async (req, res) => {
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
