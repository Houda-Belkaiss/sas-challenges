import readline from 'readline/promises'
import { stdin as input, stdout as output  } from 'process';
import { log } from 'console';

const rl = readline.createInterface({ input, output });
let kilomètres = await rl.question('Distance :');
let litres = await rl.question('Carburant :');
let consomation = (litres / kilomètres) * 100;
let n = consomation.toFixed(2);
console.log(`Distance: ${kilomètres} KM`);
console.log(`Carburant: ${litres} Litres`);
console.log(`consomation: ${n} L/100 KM`);


