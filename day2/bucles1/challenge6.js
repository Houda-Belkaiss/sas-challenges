// Challenge 6 : Compte à rebours
// Écrivez un programme qui effectue un compte à rebours à partir d'un nombre donné jusqu'à 0.
// Exemple :
// Départ : 5
// 5
// 4
// 3
// 2
// 1
// 0
// Décollage !
// Utilisez while.
let prompt = require('prompt-sync')();

let n = prompt('Entrez un nomber:');
console.log('Départ :',n);


while(n >= 0){
    console.log(n);
    n--;
}
    


