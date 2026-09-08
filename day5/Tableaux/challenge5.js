function contientElement(tab, valeur){
    for (let i = 0; i < tab.length; i++) {
       if(valeur==tab[i])  {
        return true;
       }
    }return false;
}
console.log(contientElement(["pomme", "banane"], "banane"));
