let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];
let admis = 0;
    let nonAdmis = 0;
for(let i=0; i<students.length;i++){
    console.log('Name:',students[i].name);
    console.log('Note:',students[i].note);
    if(students[i].note >= 10){
        console.log('Admis');  
        admis = admis + 1;  
    }else{
        console.log('Non admis'); 
         nonAdmis = nonAdmis + 1;
    }
   
    
}
 console.log('les étudiants admis:',admis);
 console.log(' les étudiants non admis:',nonAdmis);
<<<<<<< HEAD
 
=======
 
>>>>>>> 68d43a203009cfc84c8666048ac0ac120931e3da
