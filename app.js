const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

module.exports = express()
  .use(morgan('dev'))
  .use(express.json())
  .use('/api', router)
  .get('/', (req, res) => res.send('Hello World!'))
  .use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  })
  .use((req, res) => res.status(404).send('Not Found'));
