var prompt = require('prompt-sync')();
var note = +prompt('Entrez la note:');

console.log('Note:',note);
if (note < 10 && note < 0) {
    console.log('Échec');
}else if (note>= 10 && note < 12) {
    console.log('Passable');
}else if ( note>= 12 && note < 14 ){
    console.log('Assez bien');
}else if (note>= 14 && note < 16) {
    console.log('Bien');
}else if (note>= 16 && note < 18) {
    console.log('Très bien');
}else if (note>= 18 && note <= 20) {
    console.log('Excellent');
}else{
    console.log('note invalide');
    
}
