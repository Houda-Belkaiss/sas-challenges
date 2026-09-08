let prompt = require('prompt-sync')();
let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];
function recherchBinaire(){
    let rech = +prompt('ID recherch:');
    for (let i = 0; i < ids.length; i++) {
        if (rech == ids[i]) {
            return i;
        }  
    }
    return `number invalable`;

}
console.log(recherchBinaire());
