var prompt = require('prompt-sync')();
var u = prompt('Tension :');
var i = prompt('Intensité :');
var t = prompt('Temps :');
var energie = u * i * t;
console.log('energie :', energie);


