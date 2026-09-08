let prompt = require('prompt-sync')();


let rayon = prompt('Rayon:');
let hauteur = prompt('Hauteur:');

const π = 3.14159;
let volume = π * (rayon**2) * hauteur;
console.log("Volume :",volume,"m³");




