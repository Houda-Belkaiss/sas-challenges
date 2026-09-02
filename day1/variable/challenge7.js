var prompt = require('prompt-sync')();
var noteCC = prompt('Contrôle continu :');
var noteProjet = prompt('Projet :');
var noteExamen = prompt('Examen :');

var noteFinale = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10;
console.log('Note finale :',noteFinale);


