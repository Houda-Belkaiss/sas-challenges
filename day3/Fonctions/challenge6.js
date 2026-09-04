
// let motDePasse = ("codecode@1234");
 let prompt = require('prompt-sync')();
let inp = input();
let vMotDePasse = verifierMotDePasse(inp);
vMotDePasse ? console.log('true') : console.log('false');


function input() {
  let motDePasse = prompt('Entrez le mots de passe:');
  return motDePasse;
}

function verifierMotDePasse(motDePasse){
    for (let i = 0; i < motDePasse.length; i++) {
        
         if (motDePasse.length >  7 && motDePasse.includes('@')){
       return true;
     }else{
        return false;
     }
    }
     
}
