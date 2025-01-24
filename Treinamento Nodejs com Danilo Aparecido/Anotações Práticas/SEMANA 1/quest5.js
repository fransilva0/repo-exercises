const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const perguntarArea = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            resolve(parseFloat(resposta));
        });
    });
}

async function main() {
    try {
        const area = await perguntarArea('Digite o tamanho da área a ser pintada em metros quadrados: ');
        const coberturaPorLitro = 3; // 1 litro para cada 3 metros quadrados
        const litrosNecessarios = area / coberturaPorLitro;
        const capacidadeLata = 18; // 18 litros por lata
        const precoLata = 80.0; // R$ 80,00 por lata

        // Calculando o número de latas necessárias (arredondando para cima)
        const latasNecessarias = Math.ceil(litrosNecessarios / capacidadeLata);
        const precoTotal = latasNecessarias * precoLata;

        console.log(`Você precisará de ${latasNecessarias} latas de tinta.`);
        console.log(`O preço total será de R$ ${precoTotal.toFixed(2)}.`);
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    } finally {
        rl.close();
    }
}

main();
