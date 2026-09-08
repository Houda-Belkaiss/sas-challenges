let prompt= require('prompt-sync')();
let n = +prompt('Combien des nombers:');
let tab = [];
for(let i=0;i<n;i++){
    tab[i] = +prompt('Entrez les nombers:');
}
let element = +prompt('Entrez element qui doit ajoute:')


function ajouterALaFin(tab, element){
    
      tab[tab.length]= element;
      return tab;
}
console.log(ajouterALaFin(tab, element));
