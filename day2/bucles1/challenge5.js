var prompt = require('prompt-sync')();
let N = +prompt('N =');
let X = +prompt('X =');

let compteur = 0;

for(let i = 1; i * X <= N ;i++){
  console.log(i * X);
  compteur++; 
  
}
console.log('Nombre total de multiples =', compteur);
