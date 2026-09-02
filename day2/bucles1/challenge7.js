// Challenge 7 : Trouver le premier nombre supérieur
// Écrivez un programme qui part de 1 et cherche le premier nombre dont le carré est supérieur à 100.
// Exemple :
// Résultat : 11
// 11 × 11 = 121
// Utilisez while.
let prompt = require('prompt-sync')();

let n = +prompt('Number :');
console.log('Résultat :',n);
let i = n*n;

while ( i < 100){
    n++;
    console.log(i);   
}
console.log(i);