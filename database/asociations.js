const { Student, Task, Subject } = require('../models');

// 1. Student has many Tasks
// Student.hasMany(
//   Task,
//   {
//     foreignKey: 'student_id',
//     as: 'tasks',
//     after: 'id',
//   },
//   {
//     onDelete: 'CASCADE',
//   }
// );

// 2. Task belongs to Student
// Task.belongsTo(Student, {
//   foreignKey: 'student_id',
//   as: 'student',
// });

// On To Many relationship
// 1. Student has many Tasks
// Student.hasMany(Task, {
//   foreignKey: 'student_id',
//   as: 'tasks',
//   onDelete: 'CASCADE',
// })
Student.hasMany(Task);
Task.belongsTo(Student);
