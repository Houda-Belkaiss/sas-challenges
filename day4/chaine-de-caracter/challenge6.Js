
let prompt = require('prompt-sync')();
let chaine = prompt('chaine:');
let fois = prompt('fois:');
function repeterChaine(chaine, fois){
   let newString ="";
   
   for (let i=0; i<fois ; i++){
      newString = newString + chaine;
      
   }
   return newString;
}
console.log(repeterChaine(chaine,fois));






















