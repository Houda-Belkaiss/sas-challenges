let prompt = require('prompt-sync')();
let code = +prompt('code: ');
 
 

switch (code) {
    case 1:
        console.log('Compte courant: -> 20 dh');
        break;
    case 2:
        console.log('Compte epargne : -> 10 dh');
        break;
    case 3:
        console.log('Compte etudiant : -> 0 dh');
        break;
    case 4:
        console.log('Compte Professionnel : -> 50 dh');
        break;
    default :
     console.log('compte invalide');   
}