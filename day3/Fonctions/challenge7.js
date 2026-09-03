
function obtenirHeureActuelle(){  
        let d =  new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        
        
       return    `${hours}:${minutes}:${seconds}`;
    
 }

console.log(obtenirHeureActuelle());
