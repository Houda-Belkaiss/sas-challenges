// let prompt = require('prompt-sync')();

let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};
function afficheLeSolde(){
   return account.balance; 
}
console.log(afficheLeSolde());

  function déposerArgent(depose){
        account.balance = account.balance + depose;
        if(depose > 0){ 
                   return  account.balance;
                } else{
         console.log('le montant est negative.');
        }
       
     } 
  
 console.log(déposerArgent(200));

      function retirerArgent(retire){
      if (retire <= account.balance) {  
            console.log('Retire de argent.');
            account.balance = account.balance - retire;
            return 'New balance:',account.balance;  
      }else { 
            return 'le solde est insiffisant.';
          }
        }
        console.log(retirerArgent(1000));
function validation() {
    if(account.balance > 0){
       return 'votre solde est suffisant.';
    }else{
        return 'votre solde est insiffisant';
    }
}
console.log(validation());
console.log('Owner:',account.owner, 'balance:',account.balance,'type:',account.type);




