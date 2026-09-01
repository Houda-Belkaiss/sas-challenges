var prompt = require('prompt-sync')();
let Note = prompt('Entrez un note:');
console.log('Note:',Note);
if ( Note >= 10) {
    console.log('Résultat :Admis');
}else if (Note < 10) {
    console.log('Résultat :Non admis');
}
