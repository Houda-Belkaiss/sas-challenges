// let prompt = require('prompt-sync')();

// function input(){
//     let montant = prompt('Montant:');

// }



function convertirMontant(montant,taux,formatter){
  
  let formatMAD = montant * taux;
  formatter(formatMAD);
}
convertirMontant (100, 10.5, function(formatter){
    console.log('Retourne :',formatter ,' DH')});
    
