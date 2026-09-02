// Challenge 6 : Calcul du score d'un examen

// Un apprenant passe un examen composé de quatre parties.

// Chaque partie donne un score différent.

// L'utilisateur fournit :

// Score partie 1
// Score partie 2
// Score partie 3
// Score partie 4

// Calculez :

//     Le score total
//     Le score moyen

// Exemple :

// Partie 1 : 15
// Partie 2 : 12
// Partie 3 : 18
// Partie 4 : 15

// Score total : 60
// Moyenne : 15
var prompt = require('prompt-sync')();
var partie1 = prompt('partie1: ') ;
var partie2 = prompt('partie2: ') ;
var partie3 = prompt('partie3: ') ;
var partie4 = prompt('partie4: ') ;




let scoreTotal = +partie1 + +partie2 + +partie3 + +partie4;
let moyen = scoreTotal / 4;

console.log('Score total :',scoreTotal);
console.log('Moyenne :',moyen);




