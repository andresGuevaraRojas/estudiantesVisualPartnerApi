const express = require('express');
const StudentController = require('./controllers/StudentController');

const app = express();
app.use(express.json());
const port = 3000;

app.get('/v1/students', (req, res) => {
  const students = StudentController.getAll();

  res.json(students);
});

app.get('/v1/students/withcertification', (req, res) => {
  const emails = StudentController.getEmailsOfStudentsWithCertification();
  res.json(emails);
});
app.get('/v1/students/withcreditsgrather500', (req, res) => {
  const students = StudentController.getStudentWithCreditsGreaterThan(500);
  res.json(students);
});

app.listen(port, () => {

});
