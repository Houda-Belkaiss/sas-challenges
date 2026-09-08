let prompt =require('prompt-sync')();
let nombres = [4, 8, 15, 16, 23, 42];

function recherchNumbre(){
   let n = +prompt('Entrez number:') ;
    for (let element of nombres) {
        if (n == element) {
            return true;
        }     
    } 
    return false;
}
console.log(recherchNumbre());
