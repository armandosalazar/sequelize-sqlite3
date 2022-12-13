const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Model: using define() method
const Student = sequelize.define(
  'Student',
  {
    firstName: {
      type: DataTypes.STRING, // VARCHAR(255)
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING, // VARCHAR(255)
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER, // INTEGER
      allowNull: false,
    },
    grade: {
      type: DataTypes.INTEGER, // INTEGER
      allowNull: true,
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
);

module.exports = Student;
