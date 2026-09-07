


function creerCompteur(valeurInitial = 0){
    return function (){
    //   return valeurInitial = valeurInitial +1;
     
       return valeurInitial += 1;
    };
}
let MonCompteur = creerCompteur(10);
console.log(MonCompteur());
console.log(MonCompteur());





