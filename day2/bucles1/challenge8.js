let prompt = require('prompt-sync')();
 let n = +prompt('Nombre de missions :');
let i = 1;
let score;
console.log('Nombre de missions :',n);


do{ 
     score = i * 100;
     console.log('Mission ',i,' -> Score : ',score);
    i++;   
}
    
while (i <= n) 
    
 


