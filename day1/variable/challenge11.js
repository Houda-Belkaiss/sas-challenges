let prompt = require('prompt-sync')();
let longueur = prompt('Longueur:');
let largeur = prompt('Largeur:');
let surface = longueur * largeur;
let périmètre = 2 * (longueur + largeur) ;

console.log('surface:',surface,'m²');
console.log('périmètre',périmètre,'m');

