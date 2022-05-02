const StudentService = require('../../lib/services/StudentService');

describe('Test for StudentService class', () => {
  test('Obtiene los mismos estudiantes que se le pasaron como parametro', () => {
    const studentsExpected = [
      {
        id: '6264d5d86119fd599c5a67e7',
        name: 'Tillman',
        email: 'Kerri@visualpartnership.xyz',
        credits: 600,
        enrollments: [
          'Visual Thinking Intermedio',
          'Visual Thinking Avanzado',
        ],
        previousCourses: 5,
        haveCertification: false,
      },
      {
        id: '6264d5d84b49870f8ac742ed',
        name: 'Terra',
        email: 'Jasmine@visualpartnership.xyz',
        credits: 388,
        enrollments: [
          'Visual Thinking Avanzado',
        ],
        previousCourses: 5,
        haveCertification: false,
      },
      {
        id: '6264d5d86a73abf2e8bcc94f',
        name: 'Ayers',
        email: 'Tricia@visualpartnership.xyz',
        credits: 935,
        enrollments: [
          'Visual Thinking Avanzado',
          'Visual Thinking Intermedio',
        ],
        previousCourses: 8,
        haveCertification: false,
      },
      {
        id: '6264d5d8df8a628bf8b62430',
        name: 'Richards',
        email: 'Hines@visualpartnership.xyz',
        credits: 552,
        enrollments: [
          'Visual Thinking Básico',
          'Visual Thinking Avanzado',
        ],
        previousCourses: 10,
        haveCertification: false,
      },
      {
        id: '6264d5d81bf954ddff848dfc',
        name: 'Perry',
        email: 'Sally@visualpartnership.xyz',
        credits: 444,
        enrollments: [
          'Visual Thinking Básico',
          'Visual Thinking Intermedio',
        ],
        previousCourses: 4,
        haveCertification: true,
      },
      {
        id: '6264d5d82c0b4c7dfb0b6ad5',
        name: 'Kara',
        email: 'Simon@visualpartnership.xyz',
        credits: 833,
        enrollments: [
          'Visual Thinking Avanzado',
        ],
        previousCourses: 8,
        haveCertification: false,
      },
      {
        id: '6264d5d8ed556685cf55a58e',
        name: 'Whitney',
        email: 'Wells@visualpartnership.xyz',
        credits: 186,
        enrollments: [
          'Visual Thinking Básico',
        ],
        previousCourses: 8,
        haveCertification: false,
      },
      {
        id: '6264d5d85cf81c496446b67f',
        name: 'Lucinda',
        email: 'Sexton@visualpartnership.xyz',
        credits: 677,
        enrollments: [
          'Visual Thinking Avanzado',
        ],
        previousCourses: 6,
        haveCertification: true,
      },
      {
        id: '6264d5d8f99e1eae7392b146',
        name: 'Alvarado',
        email: 'Maryann@visualpartnership.xyz',
        credits: 450,
        enrollments: [
          'Visual Thinking Avanzado',
          'Visual Thinking Intermedio',
        ],
        previousCourses: 10,
        haveCertification: true,
      },
      {
        id: '6264d5d82eb0f4917bd0d332',
        name: 'Clare',
        email: 'Hays@visualpartnership.xyz',
        credits: 227,
        enrollments: [
          'Visual Thinking Intermedio',
          'Visual Thinking Básico',
        ],
        previousCourses: 2,
        haveCertification: true,
      },
    ];

    const students = StudentService.getAll(studentsExpected);

    expect(students).toBe(studentsExpected);
  });

  test('Obtiene los email de los estudiantes que tienen certificado', () => {
    const students = [
      {
        id: '6264d5d86119fd599c5a67e7',
        name: 'Tillman',
        email: 'Kerri@visualpartnership.xyz',
        credits: 600,
        enrollments: [
          'Visual Thinking Intermedio',
          'Visual Thinking Avanzado',
        ],
        previousCourses: 5,
        haveCertification: false,
      },
      {
        id: '6264d5d8ed556685cf55a58e',
        name: 'Whitney',
        email: 'Wells@visualpartnership.xyz',
        credits: 186,
        enrollments: [
          'Visual Thinking Básico',
        ],
        previousCourses: 8,
        haveCertification: false,
      },
      {
        id: '6264d5d8f99e1eae7392b146',
        name: 'Alvarado',
        email: 'Maryann@visualpartnership.xyz',
        credits: 450,
        enrollments: [
          'Visual Thinking Avanzado',
          'Visual Thinking Intermedio',
        ],
        previousCourses: 10,
        haveCertification: true,
      },
    ];

    const expectedEstudentsEmails = ['Maryann@visualpartnership.xyz'];

    const emailsStudents = StudentService.getEmailsOfEstudentsWhereHaveCertification(students);

    expect(emailsStudents.length).toBe(1);
    expect(emailsStudents).toEqual(expectedEstudentsEmails);
  });

  test('Obtiene los estudiantes con credits mayor al solicitado', () => {
    const students = [
      {
        id: '6264d5d86119fd599c5a67e7',
        name: 'Tillman',
        email: 'Kerri@visualpartnership.xyz',
        credits: 600,
        enrollments: [
          'Visual Thinking Intermedio',
          'Visual Thinking Avanzado',
        ],
        previousCourses: 5,
        haveCertification: false,
      },
      {
        id: '6264d5d84b49870f8ac742ed',
        name: 'Terra',
        email: 'Jasmine@visualpartnership.xyz',
        credits: 388,
        enrollments: [
          'Visual Thinking Avanzado',
        ],
        previousCourses: 5,
        haveCertification: false,
      },
      {
        id: '6264d5d86a73abf2e8bcc94f',
        name: 'Ayers',
        email: 'Tricia@visualpartnership.xyz',
        credits: 935,
        enrollments: [
          'Visual Thinking Avanzado',
          'Visual Thinking Intermedio',
        ],
        previousCourses: 8,
        haveCertification: false,
      },
      {
        id: '6264d5d8df8a628bf8b62430',
        name: 'Richards',
        email: 'Hines@visualpartnership.xyz',
        credits: 552,
        enrollments: [
          'Visual Thinking Básico',
          'Visual Thinking Avanzado',
        ],
        previousCourses: 10,
        haveCertification: false,
      },
      {
        id: '6264d5d81bf954ddff848dfc',
        name: 'Perry',
        email: 'Sally@visualpartnership.xyz',
        credits: 444,
        enrollments: [
          'Visual Thinking Básico',
          'Visual Thinking Intermedio',
        ],
        previousCourses: 4,
        haveCertification: true,
      },
      {
        id: '6264d5d82c0b4c7dfb0b6ad5',
        name: 'Kara',
        email: 'Simon@visualpartnership.xyz',
        credits: 833,
        enrollments: [
          'Visual Thinking Avanzado',
        ],
        previousCourses: 8,
        haveCertification: false,
      },
      {
        id: '6264d5d8ed556685cf55a58e',
        name: 'Whitney',
        email: 'Wells@visualpartnership.xyz',
        credits: 186,
        enrollments: [
          'Visual Thinking Básico',
        ],
        previousCourses: 8,
        haveCertification: false,
      },
      {
        id: '6264d5d85cf81c496446b67f',
        name: 'Lucinda',
        email: 'Sexton@visualpartnership.xyz',
        credits: 677,
        enrollments: [
          'Visual Thinking Avanzado',
        ],
        previousCourses: 6,
        haveCertification: true,
      },
      {
        id: '6264d5d8f99e1eae7392b146',
        name: 'Alvarado',
        email: 'Maryann@visualpartnership.xyz',
        credits: 450,
        enrollments: [
          'Visual Thinking Avanzado',
          'Visual Thinking Intermedio',
        ],
        previousCourses: 10,
        haveCertification: true,
      },
      {
        id: '6264d5d82eb0f4917bd0d332',
        name: 'Clare',
        email: 'Hays@visualpartnership.xyz',
        credits: 227,
        enrollments: [
          'Visual Thinking Intermedio',
          'Visual Thinking Básico',
        ],
        previousCourses: 2,
        haveCertification: true,
      },
    ];

    const studentCreditsGreater500 = StudentService.getStudentWithCreditsGreaterThan(students, 500);

    expect(studentCreditsGreater500.length).toBe(5);
  });
});
