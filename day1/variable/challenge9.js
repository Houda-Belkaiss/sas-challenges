let prompt = require('prompt-sync')();
let x1 = prompt('x1:');
let y1 = prompt('y1:');
let z1 = prompt('z1:');

let x2 = prompt('x2:');
let y2 = prompt('y2:');
let z2 = prompt('z2:');

let somme =((x2-x1)**2)+((y2-y1)**2)+((z1-z2)**2);
let distance = somme ** 0.5;

console.log("Ditance:",distance);



