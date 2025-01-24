const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const perguntarNumero = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            resolve(parseFloat(resposta));
        });
    });
}

async function main() {
    try {
        const numero1 = await perguntarNumero('Digite o primeiro número: ');
        const numero2 = await perguntarNumero('Digite o segundo número: ');

        if (numero1 > numero2) {
            console.log(`O maior número é: ${numero1}`);
        } else if (numero2 > numero1) {
            console.log(`O maior número é: ${numero2}`);
        } else {
            console.log('Os dois números são iguais.');
        }
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    } finally {
        rl.close();
    }
}

main();
