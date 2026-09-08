
let prompt = require('prompt-sync')();
let chaine = prompt('chaine:');

function estPalindrome(chaine){
    let newString = "";
    // for(element of chaine){
    for(let i=0; i<chaine.length;i++){
        newString = chaine[i] + newString;
    }
    if(newString == chaine){
            return true;
        }else{
            return false;
        }
       

}
console.log(estPalindrome(chaine));


























