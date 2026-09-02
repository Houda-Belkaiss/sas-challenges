
var prompt =require('prompt-sync')();
var n = prompt('Entrez un nomber:');
if (n > 0) {
    console.log('le nomber est Positif');
}else if (n < 0 ){
    console.log('le nomber est Negatif');
}else if (n == 0){
    console.log('Le nomber est egal a zero'); 
}