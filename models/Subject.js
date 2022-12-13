const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Model: using define() method
const Subject = sequelize.define(
  'Subject',
  {
    name: {
      type: DataTypes.STRING, // VARCHAR(255)
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
);

module.exports = Subject;
