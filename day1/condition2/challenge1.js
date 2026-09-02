// Une boutique en ligne calcule les frais de livraison selon le montant de la commande.
// Règles :
// Montant < 100 DH → livraison 30 DH
// Montant entre 100 DH et 299 DH → livraison 20 DH
// Montant entre 300 DH et 499 DH → livraison 10 DH
// Montant >= 500 DH → livraison gratuite
// Afficher :
// Montant commande :
// Frais livraison :
// Total à payer :
// Exemple :
// Montant commande : 350 DH
// Frais livraison : 10 DH
// Total à payer : 360 DH
let prompt = require('prompt-sync')();
let montant = +prompt('Entrez le montant de commande :');
console.log('Montant commande :',montant, 'dh');
let totalPaye;
let fraisLivraison;

if(montant < 100){
    console.log('Frais de livraison :30 DH');
    fraisLivraison = 30;
}else if(montant >= 100 && montant <= 299){
    console.log('Frais de livraison :20 DH');
    fraisLivraison =  20;
}else if (montant >= 300 && montant <= 499){
    console.log('Frais de livraison :10 DH');
    fraisLivraison =  10;
}else{
    fraisLivraison = 0;
    console.log('livraison gratuite');
    
}
totalPaye = montant + fraisLivraison; 
console.log('Total à payer :',totalPaye, 'dh');