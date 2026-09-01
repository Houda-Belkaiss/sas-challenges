
var prompt =require('prompt-sync')();
var n = prompt('Entrez un nomber:');
if (n > 0) {
    console.log('Positif');
}else if (n < 0 ){
    console.log('Negatif');
}else if (n == 0){
    console.log('Egal a zero'); 
}