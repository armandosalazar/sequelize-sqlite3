const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
// const sequelize = new Sequelize('sqlite::memory:', {
//   dialect: 'sqlite',
//   storage: './database.sqlite',
// });
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

module.exports = sequelize;
