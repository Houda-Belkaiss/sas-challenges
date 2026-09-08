let prompt = require('prompt-sync')();
let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Informatique",
        price: 7500
    },
    {
        id: 2,
        name: "Phone",
        category: "Smartphone",
        price: 3500
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Informatique",
        price: 500
    },
    {
        id: 4,
        name: "Monitor",
        category: "Informatique",
        price: 2200
    }
];
let id = +prompt('ID recherch:');
function rechecherIdProdect(id){
    for(let element of products){
        if (id === element.id) {
            return element;
    }  
      } 
         return "Aucun produit trouvé avec cet ID."
        }

console.log(rechecherIdProdect(id));


     let name = prompt('Recherch Name:');
     function rechecherNomProduit(name){
     for(let i=0; i<products.length; i++){
         if (name === products[i].name) {
            return products[i];
        }
    }
      return 'Aucun produit trouvé avec ce name.'; 
    }  
    console.log(rechecherNomProduit(name));


    let category = prompt('Recherch Category:');
    function rechecherProduitCategorie(category) {
        let resultats =[];
        for (let i = 0; i < products.length; i++) {
            if (category === products[i].category) {
                resultats.push(products[i]);  
            } 
        }
        return resultats;
        }
    console.log(rechecherProduitCategorie(category));
      
   let prixMax = +prompt('Prix max:');
    function rechecherParPrix(prixMax) {
        let resultats = [];
        for (let element of products) {
            if( prixMax >= element.price)  {
                 resultats.push(element);   
            } 
        }
        return resultats;
        
    }
    console.log(rechecherParPrix(prixMax));
    
    
    
 
 
