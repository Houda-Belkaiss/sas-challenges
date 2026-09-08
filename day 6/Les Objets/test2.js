
const students = [
  {
    id: 1,
    name: "Ahmed",
    age: 20,
    class: "DEV101"
  },
  {
    id: 2,
    name: "Sara",
    age: 22,
    class: "DEV101"
  },
  {
    id: 3,
    name: "Youssef",
    age: 21,
    class: "DEV102"
  },
  {
    id: 4,
    name: "Imane",
    age: 19,
    class: "DEV102"
  }
];


// Array 2: Absence follow-up
const absences = [
  {
    studentId: 1,
    subjectId: 101,
    subject: "JavaScript",
    absences: 2
  },
  {
    studentId: 1,
    subjectId: 102,
    subject: "HTML",
    absences: 1
  },
  {
    studentId: 2,
    subjectId: 101,
    subject: "JavaScript",
    absences: 4
  },
  {
    studentId: 2,
    subjectId: 103,
    subject: "CSS",
    absences: 2
  },
  {
    studentId: 3,
    subjectId: 101,
    subject: "JavaScript",
    absences: 1
  },
  {
    studentId: 3,
    subjectId: 102,
    subject: "HTML",
    absences: 3
  },
  {
    studentId: 4,
    subjectId: 103,
    subject: "CSS",
    absences: 5
  }
];

function absenceRecordsWithName(students, absences){
     for (let x in students){ 
        for(let y in absences){
            if (students[x].id == absences[y].studentId) {
              console.log(`Name:,${students[x].name}, subjectedId:${absences[y].subject}, Subject:${absences[y].subject},Absences:${absences[y].absences} `);
                   
            } 
        }     
    }       
       }
          
absenceRecordsWithName(students,absences);
