const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function perguntar(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            resolve(resposta);
        });
    });
}

async function main() {
    try {
        const numero1 = await perguntar('Digite o primeiro número: ');
        const numero2 = await perguntar('Digite o segundo número: ');

        const soma = parseFloat(numero1) + parseFloat(numero2);
        console.log(`A soma dos dois números é: ${soma}`);
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    } finally {
        rl.close();
    }
}

main();
