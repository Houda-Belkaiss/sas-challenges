

let motDePasse = ("codecode@1234");
function verifierMotDePasse(motDePasse){
    for (let i = 0; i < motDePasse.length; i++) {
        
         if (motDePasse.length >  7 && motDePasse.includes('@')){
       return true;
     }else{
        return false;
     }
    }
     
}console.log(verifierMotDePasse(motDePasse));
