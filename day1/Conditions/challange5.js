var prompt = require('prompt-sync')();
let note = ('Entrez la note:');
console.log('Note:',note);
if (0 <note< 10) {
    console.log('Échec');
}else if (10 <note< 11.99 ) {
    console.log('Passable');
}else if ( 12 <note< 13.99){
    console.log('Assez bien');
}else if (14 <note< 15.99) {
    console.log('Bien');
}else if (16 <note< 17.99) {
    console.log('Très bien');
}else if (18 <note< 20) {
    console.log('Excellent');
}
