let product ={
   name :"Ballon",
   price: 30,
   category:"Sport",
   quantity: 3,
   available: "Yes"
}
console.log(product.name);
console.log(product.price);
console.log(product.category);
let totalPrice = 0;
if(product.available == "yes"){
    totalPrice = product.price * product.quantity;
       console.log("prix total du stock:",totalPrice);
    }else{
        console.log("product invalable");
        
    }
   
   