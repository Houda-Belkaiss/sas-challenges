let prompt = require('prompt-sync')();
let nom = prompt('nom:');
let prenom = prompt('prenom:');
let tlcnome = nom.toLowerCase();
let tlcprenom = prenom.toLowerCase();

function genererEmail(tlcprenom,tlcnome){
      return `${tlcprenom}${tlcnome}@entreprise.com`;
}
console.log(genererEmail(tlcprenom,tlcnome));
