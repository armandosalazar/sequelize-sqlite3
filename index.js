const sequelize = require('./database');
const app = require('./app');
// Generate associations
require('./database/asociations');

// Verify the model
// console.log(sequelize.models); // { User: Model }
// console.log(User === sequelize.models.User); // true
// Create a new table
// User.sync({ force: true });
// Student.sync({ force: true });
// Sync all models that are not yet in the database
sequelize.sync({ force: false });
// Task.sync({ force: true });

// async function saveStudentWithCreate() {
//   const student = await Student.create({
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 15,
//     grade: 10,
//   });
//   console.log(student.toJSON());
// }

// async function saveSubjectWithNew() {
//   const subject = new Subject({
//     name: 'Math',
//   });
//   await subject.save();
//   console.log(subject.toJSON());
// }

// async function saveSubjectWithBuild() {
//   const subject = Subject.build({
//     name: 'Filosofy',
//   });
//   await subject.save();
//   console.log(subject.toJSON());
// }

// async function getStudents() {
//   const students = await Student.findAll();
//   console.log(students.map((student) => student.toJSON()));
// }

// async function getSubjects() {
//   const subjects = await Subject.findAll();
//   for (const subject of subjects) {
//     console.log(subject.toJSON());
//   }
// }

// async function createTask() {
//   const task = await Task.create({
//     title: 'Task 1',
//     description: 'Task 1 description',
//     completed: false,
//   });
//   console.log(task.toJSON());
// }

app.listen(8000, function () {
  console.log('Server is running on port 8000');
});
