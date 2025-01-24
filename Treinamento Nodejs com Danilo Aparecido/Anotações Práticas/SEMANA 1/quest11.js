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
        const numeros = [];
        const quantidade = await perguntarNumero('Quantos números você quer inserir? ');

        for (let i = 0; i < quantidade; i++) {
            const numero = await perguntarNumero(`Digite o número ${i + 1}: `);
            numeros.push(numero);
        }

        const menorValor = Math.min(...numeros);
        const maiorValor = Math.max(...numeros);
        const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);

        console.log(`O menor valor é: ${menorValor}`);
        console.log(`O maior valor é: ${maiorValor}`);
        console.log(`A soma dos valores é: ${soma}`);
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    } finally {
        rl.close();
    }
}

main();
