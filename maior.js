function encontrarMaiorMenor() {
    // Obter os valores dos campos de entrada
    const valores = [];
    for (let i = 1; i <= 5; i++) {
        const valorInput = document.getElementById(`valor${i}`).value;
        if (valorInput !== '') {
            const valor = parseFloat(valorInput);
            if (isNaN(valor)) {
                alert(`Valor inválido no campo ${i}! Digite um número.`);
                return;
            }
            valores.push(valor);
        }
    }

    // Encontrar o maior e menor valor
    let maiorValor = valores[0];
    let menorValor = valores[0];
    for (let i = 1; i < valores.length; i++) {
        if (valores[i] > maiorValor) {
            maiorValor = valores[i];
        } else if (valores[i] < menorValor) {
            menorValor = valores[i];
        }
    }

    // Exibir os resultados
    document.getElementById('maiorValor').innerHTML = `Maior Valor: ${maiorValor}`;
    document.getElementById('menorValor').innerHTML = `Menor Valor: ${menorValor}`;
}
