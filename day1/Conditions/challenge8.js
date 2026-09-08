let prompt = require("prompt-sync")();
let number1 = prompt("Number1:");
let operateur = prompt("Opereter:");
let number2 = prompt("Number2:");

 
switch(operateur){
    
    case "+":
        console.log(number1 + number2);
        break;
    case "-":
        console.log(number1 - number2);
        break;
    case "*":
        console.log(number1 * number2);
        break;
     case "/":
        console.log(number1 / number2);
        break;
    default:
        console.log("Operater invalide");
        

    
        
}
