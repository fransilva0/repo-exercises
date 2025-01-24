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
    let notaValida = false;
    while (!notaValida) {
        try {
            const nota = await perguntarNota('Digite uma nota entre 0 e 10: ');

            if (nota >= 0 && nota <= 10) {
                console.log(`Nota válida informada: ${nota}`);
                notaValida = true;
            } else {
                console.log('Valor inválido. Por favor, digite uma nota entre 0 e 10.');
            }
        } catch (error) {
            console.error('Ocorreu um erro: ', error);
        }
    }
    rl.close();
}

main();
