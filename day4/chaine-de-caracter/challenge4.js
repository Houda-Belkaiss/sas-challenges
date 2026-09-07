function estPalindrome(chaine){
    let newchaine = "";
    for(element of chaine){
        newchaine = element + newchaine;
        if(newchaine == chaine){
            return true;
        }

    }
    return false;
    
}
console.log(estPalindrome("kayak"));
