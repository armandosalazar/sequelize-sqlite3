const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Model: using define() method
const Task = sequelize.define(
  'Task',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    // Other model options go here
    timestamps: true,
    underscored: true,
  }
);

module.exports = Task;
