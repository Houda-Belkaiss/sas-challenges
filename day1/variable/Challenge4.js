// Challenge 4 : Calcul de consommation d'une voiture

// Vous développez une application pour calculer la consommation d'une voiture.

// L'utilisateur fournit :

//     La distance parcourue en kilomètres
//     La quantité de carburant consommée en litres

// Calculez la consommation moyenne en litres / 100 km.

// Formule :

// Consommation = (litres / kilomètres) * 100

// Exemple :

// Distance : 500 km
// Carburant : 35 litres

// Consommation : 7 L/100 km

var prompt = require('prompt-sync')();

var kilomètres = prompt('Distance :');
var litres = prompt('Carburant :');

let consommation = (litres / kilomètres) * 100 ;


console.log('Distance :'+ kilomètres + 'km');
console.log('Consommation :'+ consommation.toFixed(0) + 'L/100km');







