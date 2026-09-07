function inverserChaine(chaine){
    let newchaine = "";
    for(let i=0; i<chaine.length;i++)
        // for(element of chaine)
            {
        newchaine = chaine[i] + newchaine;
    }
    return newchaine;
}
console.log(inverserChaine('hello'));
