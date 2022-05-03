const StudentController = require('../../lib/controllers/StudentController');

describe('Test for StudentController Class', () => {
  test('Retorna todos los estudiantes', () => {
    const students = StudentController.getAll();

    expect(students.length).toBe(51);
  });

  test('Retorna los email de los estudiantes que tienen cerficado', () => {
    const emailsStudents = StudentController.getEmailsOfStudentsWithCertification();

    expect(emailsStudents.length).toBe(29);
  });

  test('Retorna los estudiantes con credits mayor a 500', () => {
    const studentsWithCreditsGreather500 = StudentController.getStudentWithCreditsGreaterThan(500);

    expect(studentsWithCreditsGreather500.length).toBe(27);
  });
});
