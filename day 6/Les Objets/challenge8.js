let students = [
     { id: 1, name: "Ali", age: 20 },
     { id: 2, name: "Sara", age: 22 },
     { id: 3, name: "Omar", age: 19 },
     { id: 4, name: "Imane", age: 21 }
 ];
 let prompt = require('prompt-sync')();
 let id = +prompt('Id:');

 function rechercherEtudiant(id){
    let trouve = false;
    for(element of students){
        if(id === element.id){
            trouve = true;
            return element;
        }
    }
    if(trouve === false){
       return "Aucun étudiant trouvé avec cet ID.";
        
    }
 }
 console.log(rechercherEtudiant(id));

//  let prompt = require('prompt-sync')();
//  let id = +prompt('Id:');

 //  let trouve = false ;
//  for (let i = 0; i < students.length; i++) {
    
//     if( id === students[i].id){
//         trouve = true;
//         console.log(students[i]); 
//      }
//  }
//  if(trouve === false){
//     console.log("Aucun étudiant trouvé avec cet ID.");
//  }
 

    
          
 


    
   
