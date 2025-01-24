const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Digite um número: ', (numero) => {
    console.log(`O número informado foi ${numero}`);
    rl.close();
});
