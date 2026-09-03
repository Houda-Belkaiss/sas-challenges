let prompt = require('prompt-sync')();
let ageHumain = +prompt('Entrez age:');



function calculerAgeChien(ageHumain){

     return ageHumain * 7;

}
console.log(calculerAgeChien(ageHumain));
