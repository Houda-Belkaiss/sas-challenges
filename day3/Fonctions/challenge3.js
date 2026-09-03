let prompt = require('prompt-sync')();
let nom = prompt('nom:');
let prenom = prompt('prenom:');

function genererEmail( prenom ,nom){
      return prenom + nom +"@entreprise.com";
}
console.log(genererEmail(prenom,nom));
