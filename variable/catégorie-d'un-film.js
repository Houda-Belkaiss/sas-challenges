
var propmt = require('prompt-sync')();
var durée = propmt('Entrez la duree du film en minutes:');
console.log('Durée :',durée);

if (durée< 60 ) {
    console.log('Catégorie :Court métrage');
}else if (60>durée<120) {
    console.log('Catégorie :Film standard');
} else {
    console.log('Catégorie :Film long');
}




