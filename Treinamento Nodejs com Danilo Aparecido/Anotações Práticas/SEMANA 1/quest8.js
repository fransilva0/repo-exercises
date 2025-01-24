const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const perguntarNumero = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            resolve(parseInt(resposta));
        });
    });
}

async function main() {
    try {
        const numero = await perguntarNumero('Digite um número de 1 a 7 para o dia da semana: ');

        switch (numero) {
            case 1:
                console.log('O dia correspondente é: Domingo');
                break;
            case 2:
                console.log('O dia correspondente é: Segunda-feira');
                break;
            case 3:
                console.log('O dia correspondente é: Terça-feira');
                break;
            case 4:
                console.log('O dia correspondente é: Quarta-feira');
                break;
            case 5:
                console.log('O dia correspondente é: Quinta-feira');
                break;
            case 6:
                console.log('O dia correspondente é: Sexta-feira');
                break;
            case 7:
                console.log('O dia correspondente é: Sábado');
                break;
            default:
                console.log('Valor inválido.');
        }
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    } finally {
        rl.close();
    }
}

main();
