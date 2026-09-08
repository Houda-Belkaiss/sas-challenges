
import readline from 'readline/promises';
import {stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

let stokage = await rl.question('Entrez la capacité exprimée en Gigaoctets (GB) ');
const gb = 1024;

let resultat = gb * stokage;

console.log(`stokage: ${stokage} GB`);
console.log(resultat,"MB");


rl.close();









