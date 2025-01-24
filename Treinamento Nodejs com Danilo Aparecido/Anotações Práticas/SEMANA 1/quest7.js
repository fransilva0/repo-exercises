const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const perguntarLetra = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            resolve(resposta.toLowerCase());
        });
    });
}

async function main() {
    try {
        const letra = await perguntarLetra('Digite uma letra: ');

        if (letra.length !== 1 || !/[a-z]/.test(letra)) {
            console.log('Por favor, digite uma única letra do alfabeto.');
        } else {
            const vogais = ['a', 'e', 'i', 'o', 'u'];
            if (vogais.includes(letra)) {
                console.log(`${letra} é uma vogal.`);
            } else {
                console.log(`${letra} é uma consoante.`);
            }
        }
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    } finally {
        rl.close();
    }
}

main();
