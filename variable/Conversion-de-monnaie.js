let MAD;
const eur1= 11;

const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin, output:process.stdout });
    rl.question('Entrez le budget en mad',(MAD) => {
        console.log(`Budget en MAD: ${MAD}`);
         let eur = MAD / eur1;
        console.log(`Budget en EUR: ${eur}`);

     rl.close();

    });


 