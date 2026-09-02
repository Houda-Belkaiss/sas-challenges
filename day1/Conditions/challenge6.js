console.log("1 → Afficher le profil");
console.log("2 → Afficher les paramètres");
console.log("3 → Afficher les notifications");
console.log("4 → Se déconnecter");

let prompt = require('prompt-sync')();
let choix = +prompt('Entrez le choix:');

switch (choix) {
    case 1:
        console.log('le profil');
        break;
    case 2:
        console.log('les paramètres');
        break;
    case 3:
        console.log('les notifications');
        break;
    case 4:
        console.log('Se déconnecter');
         break;
    default:
        console.log('Choix invalide. ');
        
}



