let prompt = require("prompt-sync")();
let code = prompt('Entrez le code de catégorie:');

switch (code) {
    case 'A':
        console.log('A-> Electronique.');
        console.log('Produit: Smartphone.');
        break;
    case 'B':
        console.log('B-> Vêtements.');
        console.log('Produit: T-shirt');
        break;
    case 'C':
        console.log('C-> Alimentation.');
        console.log('Produit: Pain');
        break;
    case 'D':
        console.log('D-> Maison.');
        console.log('Produit: Chaise');
        break;
    case 'E':
        console.log('E-> Sport');
        console.log('Produit: Ballon');
        break;

    default:
        console.log('Catégorie inconnue.');
        break;
}