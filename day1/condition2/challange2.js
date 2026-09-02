// challenge 2 : Feu tricolore
// Un système de circulation reçoit une couleur de feu :
// rouge
// orange
// vert
// Le programme doit afficher l'action du conducteur.
// Règles :
// rouge  → Arrêtez-vous
// orange → Ralentissez
// vert   → Vous pouvez passer
// Si la couleur est inconnue :
// Couleur invalide
let prompt = require('prompt-sync')();
let couleur = prompt('Entrez la couleur :') ;
if (couleur == 'rouge') {
    console.log(' Arrêtez-vous'); 
}else if (couleur == 'orange' ){
    console.log('Ralentissez');
}else if (couleur == 'vert'){
    console.log('Vous pouvez passer');
}else{
    console.log('Couleur invalide');  
}