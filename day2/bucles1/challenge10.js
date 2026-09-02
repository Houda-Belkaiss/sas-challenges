let prompt = require('prompt-sync')();

let n ;
let somme = 0;
let nv = -1;

do{
  n = +prompt('Saisie :');
  somme = somme + n;
  nv++;
  
}while(n !== 0)
    console.log('Somme :',somme);
    console.log('Nombre de valeurs :',nv);
    
    