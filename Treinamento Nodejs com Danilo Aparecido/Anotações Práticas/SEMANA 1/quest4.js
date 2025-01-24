const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const perguntarMetros = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            resolve(parseFloat(resposta));
        });
    });
}

async function main() {
    try {
        const metros = await perguntarMetros('Digite a quantidade em metros: ');
        const centimetros = metros * 100;
        console.log(`${metros} metros é igual a ${centimetros} centímetros.`);
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    } finally {
        rl.close();
    }
}

main();
