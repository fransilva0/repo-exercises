const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const perguntarNota = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            resolve(parseFloat(resposta));
        });
    });
}

async function main() {
    try {
        const notas = [];
        for (let i = 1; i <= 4; i++) {
            const nota = await perguntarNota(`Digite a nota ${i}: `);
            notas.push(nota);
        }

        const soma = notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);
        const media = soma / notas.length;
        console.log(`A média das quatro notas é: ${media.toFixed(2)}`);
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    } finally {
        rl.close();
    }
}

main();
