var prompt = require('prompt-sync')();
var montant = prompt(' Montant de la commande:');
console.log('Montant:',montant ,'dh');
if (montant >= 500 ) {
    console.log('Livraison : Gratuite');
    console.log('Total a payer:  ',montant ,'dh' );
}else if(montant < 500 ){
    console.log('Frais de livraison : 40 DH');
    let tonumber =+montant;
    let totalPaye = tonumber + 40;
    console.log('Total a payer: ',totalPaye ,'dh');
}



