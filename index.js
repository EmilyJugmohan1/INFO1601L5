//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverateGrade(student, course) {
  for (let trans of student.transcript){
    if (trans.course === course){
      let sum = 0;

      for (let grade of trans.grades){
        sum += grade;
      }
      return sum / trans.grade.length;
    }
  }
  return -1;
}

function getAssignmentMark(student, course, num) {
  if (student.course && student.course[course]) {
    const assignment = student.course[course].assignment;

    if (assignment && assignment[num] !== undefined) {
      return assignment[num].grade;
    }
  }

  return -1;
}

function averageAssessment(students, courseName, assignment) {
  let totalMarks = 0;
  let count = 0;

  for (const student of students) {
    if (student.course && student.course[courseName]) {
      const assignment = student.course[courseName].assignment;

      if (assignment && assignments[assignment] !== undefined) {
        totalMarks += assignments[assignment].grade;
        count++;
      }
    }
  }

  return count > 0 ? totalMarks / count : 0;
}