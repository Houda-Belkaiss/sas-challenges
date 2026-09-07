let prompt = require('prompt-sync')();

let p = +prompt('Base :');
let n = +prompt('Exposant :');
let result = 1;
let i =1;

 while(i <= n){
     result = result * p;
    i++;
 }
 console.log('Résultat :',result);
 