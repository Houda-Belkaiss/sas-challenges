let prompt = require('prompt-sync')();

let n = +prompt('N = ');
let result = 1;
for(let i = 1; i <= n;i++){
    result = result * i;
    
}
console.log(n,'! =',result);
