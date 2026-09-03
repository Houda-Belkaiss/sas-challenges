//  let prompt = require('prompt-sync')();
//  let nomber = prompt('Entrez les nombers:');
//  let somme = 0;

//  function additionnerTout(nomber){
//     for (let i = 0; i < nomber.length; i++) {
        
//          somme = somme + nomber[i];
   
//      }
//           return `la somme ${somme} `
//     }
//  console.log(additionnerTout(nomber));
let nomber = [10,20,30,40]; let somme = 0;
 function additionnerTout(nomber){
   for (let i = 0; i < nomber.length; i++) {
        
        somme = somme + nomber[i];
   
    }
         return `la somme ${somme} `
   } console.log(additionnerTout(nomber));
