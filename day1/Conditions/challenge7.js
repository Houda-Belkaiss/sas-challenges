let prompt = require('prompt-sync')();
let number = Number(prompt('Nomber:'));

switch (number){
    case 1:
        console.log("1 -> Lundi");
        break;
    case 2:
        console.log("2 -> Mardi");
        break;
    case 3:
        console.log("3 -> Mercredi");
        break;
    case 4:
        console.log("4 -> Jeudi");
        break;
    case 5:
        console.log("5 -> Vendredi");
        break;
    case 6:
        console.log("6 -> Samedi");
        break;
    case 7:
        console.log("7 -> Dimanche");
        break;
    default:
        console.log("Numéro invalide.");
       
             
}