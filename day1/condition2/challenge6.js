let prompt = require('prompt-sync')();
let mois = +prompt('saisit un numéro de mois:');
switch (mois) {
    case 1:
        console.log('1 -> Janvier (31 jours)');
        break;
    case 2:
        console.log('2 -> Février (28 ou 29 jours)');
        break;
    case 3:
        console.log('3 -> Mars (31 jours)');
        break;
    case 4:
        console.log('4 -> Avril (30 jours) ');
        break;
    case 5:
        console.log('5 -> Mai (31 jours)');
        break;
    case 6:
        console.log('6 -> Juin (30 jours)');
        break;
    case 7:
        console.log('7 -> Juillet (31 jours)');
        break;
    case 8:
        console.log('8 -> Août (31 jours)');
        break;
    case 9:
        console.log('9 -> Septembre (30 jours)');
        break;
    case 10:
        console.log('10 -> Octobre (31 jours)');
        break;
    case 11:
        console.log('11 -> Novembre (30 jours)');
        break;
    case 12:
        console.log('12 -> Décembre (31 jours)');
        break; 
    default :
    console.log('Numéro de mois invalide');  
}
