let prompt = require('prompt-sync')();
let prixInitial = prompt('Montant :');
let reduction;
let prixFinal;

if (prixInitial >= 2000 ) {
    reduction = 0.15 * prixInitial;
    console.log('Réduction :',reduction); 
    prixFinal= prixInitial - reduction;
    console.log('Total :',prixFinal);
    
}else if(prixInitial >= 1000  && prixInitial < 2000){
   reduction = 0.1 * prixInitial;
   console.log('Réduction :',reduction); 
   prixFinal= prixInitial - reduction;
    console.log('Total :',prixFinal);

   
 }else if (prixInitial >= 500 && prixInitial < 1000 ){
     reduction = 0.5 * prixInitial;
     console.log('Réduction :',reduction);
     prixFinal= prixInitial - reduction;
    console.log('Total :',prixFinal);
    
    
}else{
     console.log('Aucune réduction');
      console.log('Total :',prixInitial);
    
}