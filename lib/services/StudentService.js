class StudentService {
  static getAll(students) {
    return students;
  }

  static getEmailsOfEstudentsWhereHaveCertification(students) {
    const studentsWithCertification = students.filter((student) => student.haveCertification);
    const studentsEmail = studentsWithCertification.map((student) => student.email);
    return studentsEmail;
  }

  static getStudentWithCreditsGreaterThan(students, creditsFlag) {
    const studentsCreditsGreater500 = students.filter((student) => student.credits > creditsFlag);

    return studentsCreditsGreater500;
  }
}

module.exports = StudentService;
