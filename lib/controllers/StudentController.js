const StudentService = require('../services/StudentService');
const Reader = require('../utils/Reader');

class StudentController {
  static getAll() {
    const students = Reader.readJsonFile('data/visualpartners.json');

    return students;
  }

  static getEmailsOfStudentsWithCertification() {
    const students = Reader.readJsonFile('data/visualpartners.json');
    const emails = StudentService.getEmailsOfEstudentsWhereHaveCertification(students);

    return emails;
  }

  static getStudentWithCreditsGreaterThan(creditsFlag) {
    const students = Reader.readJsonFile('data/visualpartners.json');
    const studentsGreater = StudentService.getStudentWithCreditsGreaterThan(students, creditsFlag);

    return studentsGreater;
  }
}

module.exports = StudentController;
