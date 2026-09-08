let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia",
        Phrase: "bien"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech",
        phrase: "Assez bien"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi",
        phrase: "passable"
    }
];
   console.log(students);
   
       for (let i = 0; i < students.length; i++) {
        console.log();
        
          console.log("first name:",students[i].firstName);
          console.log("Age:",students[i].age);
           console.log("Phrase:",students[i].phrase);
          
        }
        