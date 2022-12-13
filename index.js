const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('sqlite::memory:', {
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Test the connection
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Model: using define() method
// const User = sequelize.define(
//   'User',
//   {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // Other model options go here
//     timestamps: true,
//     underscored: true,
//   }
// );
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
// Verify the model
console.log(sequelize.models); // { User: Model }
// console.log(User === sequelize.models.User); // true
// Create a new table
// User.sync({ force: true });
// Student.sync({ force: true });
// Sync all models that are not yet in the database
sequelize.sync({ force: false });
// Create a new user
const student = new Student({
  firstName: 'John',
  lastName: 'Doe',
  age: 15,
  grade: 10,
});
const subject = Subject.build({
  name: 'Math',
});
// Save the user
// (async function () {
//   await student.save();
//   await subject.save();
// })();
// student.save();
// const math = subject.save();
//
console.log('First name:', student.firstName);
console.log(student instanceof Student); // true
console.log(student);
// Model: using init() method

async function saveStudentWithCreate() {
  const student = await Student.create({
    firstName: 'John',
    lastName: 'Doe',
    age: 15,
    grade: 10,
  });
  console.log(student.toJSON());
}

async function saveSubjectWithNew() {
  const subject = new Subject({
    name: 'Math',
  });
  await subject.save();
  console.log(subject.toJSON());
}

async function saveSubjectWithBuild() {
  const subject = Subject.build({
    name: 'Filosofy',
  });
  await subject.save();
  console.log(subject.toJSON());
}

async function getStudents() {
  const students = await Student.findAll();
  console.log(students.map((student) => student.toJSON()));
}

async function getSubjects() {
  const subjects = await Subject.findAll();
  for (const subject of subjects) {
    console.log(subject.toJSON());
  }
}

getStudents();
getSubjects();
