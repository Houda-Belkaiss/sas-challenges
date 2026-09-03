let prompt = require('prompt-sync')();

console.log('1 -> Petit trajet');
console.log('2 -> Trajet moyen');
console.log('3 ->Long trajet');
console.log('4> ->Trajet international');

let trajet = +prompt('type de trajet:');

let passagers = +prompt('nombre de passagers:');
let prixBase;
let totalPaye;

switch (trajet){
      case 1:
        console.log('Petit trajet -> 20 DH');
        prixBase = 20;
        break;
    case 2:
        console.log('Trajet moyen -> 50 DH');
        prixBase = 50;
        break;
    case 3:
        console.log('Long trajet -> 100 DH');
        prixBase = 100;
         break;
    case 4:
         prixBase = 500;
         console.log('International -> 500 DH');
          break;
    default:
        console.log('Trajet invalable');
            
}   totalPaye = passagers * prixBase;
console.log('prix total:',totalPaye);
     