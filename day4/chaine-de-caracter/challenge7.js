let prompt = require('prompt-sync')();
let chaine = prompt('Choix:');
let ancien = prompt('Ancien:');
let nouveau = prompt('Nouveau:');

function remplacerCaractere(chaine, ancien, nouveau){
        let newString ="";
      for(let i=0; i<chaine.length;i++){
        if (chaine[i] === ancien) {
            newString = newString +nouveau;

        }else{
            newString = newString +chaine[i];
           
        }
      }
      return newString;
}
console.log(remplacerCaractere(chaine, ancien,nouveau));
