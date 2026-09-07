function compterLettre(chaine, lettre){
    let somme = 0;
    for(element of chaine){
        if(element == lettre){   
                 somme++;
                 
        }
     
     
      
    }
   return somme;
}
console.log(compterLettre("javascript", "a"));
