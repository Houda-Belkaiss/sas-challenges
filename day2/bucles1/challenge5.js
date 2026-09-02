var prompt = require('prompt-sync')();
let N = +prompt('N =');
let X = +prompt('X =');


let mult = 0;
for(let i = 1; i * X <= N ;i++){
 mult = i * X;
  console.log(i * X);
  mult++;
  
}

