// Constante para a taxa de conversão
const taxaConversao = 0.0193367801;

function converterMmHgParaPSI() {
    // Obter o valor em mmHg
    const valorMmHg = parseFloat(document.getElementById('valorMmHg').value);

    // Validar se o valor é um número positivo
    if (isNaN(valorMmHg) || valorMmHg <= 0) {
        alert('Valor inválido! Digite um número positivo para mmHg.');
        return;
    }

    // Converter para PSI
    const valorPSI = valorMmHg * taxaConversao;

    // Exibir o resultado
    document.getElementById('resultadoMmHgParaPSI').innerHTML = `Valor em PSI: ${valorPSI.toFixed(2)}`;
}

function converterPSIParaMmHg() {
    // Obter o valor em PSI
    const valorPSI = parseFloat(document.getElementById('valorPSI').value);

    // Validar se o valor é um número positivo
    if (isNaN(valorPSI) || valorPSI <= 0) {
        alert('Valor inválido! Digite um número positivo para PSI.');
        return;
    }

    // Converter para mmHg
    const valorMmHg = valorPSI / taxaConversao;

    // Exibir o resultado
    document.getElementById('resultadoPSIParaMmHg').innerHTML = `Valor em mmHg: ${valorMmHg.toFixed(2)}`;
}
