let prompt = require('prompt-sync')();
let nom = prompt('les noms:');
let titre = prompt('titre:');
function saluerClient(nom, titre) {
   
    // if(titre == undefined){
    if(titre == ''){
        return `Bonjour client ${nom}`
    }
    else{
        return `Bonjour ${titre} ${nom}`
    }
}
console.log(saluerClient(nom, titre));

