
var prompt = require('prompt-sync')();
var age = prompt('Entrez age:');
console.log('Age : ',age);
if (age >= 18) {
    console.log('Acces autorise');
    }else{
        console.log('Acces refuse');
    }
