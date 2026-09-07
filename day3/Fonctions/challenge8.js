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
    
    // function convertirMontant(mantant, taux, formatter){
//       let res = mantant * taux;
//       return formatter(res);
// }
// function formatMAD(resultat){
//     return resultat + 'dh';
    
// }
// console.log(convertirMontant(100, 10.5, formatMAD));
    
