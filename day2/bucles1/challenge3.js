var prompt = require('prompt-sync')();
let n = Number(prompt('N ='));
let Somme = 0;
for (let i = 0; i <= n ; i++) {
     Somme = Somme + i ;
   
}console.log('Somme = ', Somme);
