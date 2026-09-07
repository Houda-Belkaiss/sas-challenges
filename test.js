let prompt = require("prompt-sync")();
let number = prompt('Entrez number:');
let Total = 0;
let remise = 0;
const prixArticle = 125;
if(number == 0){
    console.log("Total est:0"); 
}else if(number == 1){
    console.log("Total est:",prixArticle); 
}else if (number > 1) {
    for(let i=1;i<=number;i++){ 
         Total = Total +(prixArticle -prixArticle *remise);
         remise = remise + 0.2;
         
         
    }
    
    console.log("Total est:",Total);
   
    

}
