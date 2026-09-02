var prompt = require('prompt-sync')();
let Nombre = +prompt('Nombre :');

console.log('Nombre = ', Nombre);


for (let i = 0; i <= 10; i++) {
    console.log(Nombre, 'x', i,'=',Nombre * i);
}