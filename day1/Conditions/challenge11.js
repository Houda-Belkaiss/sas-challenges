let prompt = require('prompt-sync')();
console.log('1-> Pizza.');
console.log('2-> Burger.');
console.log('3-> Tacos.');
console.log('4-> Salade.');

let choix = +prompt('Choix:');
let quantite = +prompt('Quantité :');
let prixunitaire ;
let total ;
let réduction ;
let totalPaye;
switch (choix) {
    case 1:
      console.log('Plat :Pizza'); 
       prixunitaire = 60;
       total = quantite * prixunitaire;
       console.log('Prix unitaire :',prixunitaire);
       console.log('Sous-total :',total);
        break;
    case 2:
        console.log('Plat :Burger');
        prixunitaire = 45;
        total = quantite * prixunitaire;
        console.log('Prix unitaire :',prixunitaire);
        console.log('Sous-total :',total);
        break;
    case 3:
        console.log('Plat :Tacos');
        prixunitaire = 40;
        total = quantite * prixunitaire;
        console.log('Prix unitaire :',prixunitaire);
        console.log('Sous-total :',total);
        break;
    case 4:
        console.log('Plat :Salade');
        prixunitaire = 30;
        total = quantite * prixunitaire;
        console.log('Prix unitaire :',prixunitaire);
        console.log('Sous-total :',total);
        break; 
    default:
        console.log('choix invalide');
        break; 
} 
      if(total >= 200){
        réduction = total * 0.1;
        console.log('Réduction :',réduction);
        totalPaye = total - réduction;
        console.log('Total à payer :',totalPaye);
    }else{
        console.log('Acun Réduction');
        console.log('Total à payer :',total);
    }
