let prompt = require('prompt-sync')();
let code = prompt('Code:');


let quatrièmeN = code % 10;
let reste =(code -quatrièmeN)/10; 

let troisièmeN = reste % 10;
let reste2 = (reste - troisièmeN)/10;

let deuxièmeN = reste2 % 10;
let reste3 = (reste2 - deuxièmeN)/10


let premierN = reste3 % 10;
console.log('Premier chiffre :',premierN);
console.log('Deuxième chiffre :',deuxièmeN);
console.log('Troisième chiffre :',troisièmeN);
console.log('Quatrième chiffre :',quatrièmeN);


