// function inverserTableau(tab){
//    let newtab = [];
//    let leenk = tab.length-1;
//    for(let i = 0; i <= tab.length-1 ; i++){
//        newtab[i] = tab[leenk];
//        leenk--;
//    } return newtab;
// }
// console.log(inverserTableau([1, 2, 3, 4]));

function inverserTableau(tab){
    let newtab = [];
    let number = tab.length-1;
    let i = 0;
    while (i < tab.length) {
        newtab[i] = tab[number];
        i++;
        number--;
    }     
    return newtab;  
}
console.log(inverserTableau([1, 2, 3, 4]));
