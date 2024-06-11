function somarParesImpares() {
    // Obter os valores dos campos de entrada
    const valores = [];
    for (let i = 1; i <= 5; i++) {
        const valorInput = document.getElementById(`valor${i}`).value;
        if (valorInput !== '') {
            const valor = parseInt(valorInput);
            if (isNaN(valor)) {
                alert(`Valor inválido no campo ${i}! Digite um número inteiro.`);
                return;
            }
            valores.push(valor);
        }
    }

    // Inicializar variáveis para somas
    let somaPares = 0;
    let somaImpares = 0;

    // Processar cada valor do array
    for (const valor of valores) {
        if (valor % 2 === 0) {
            somaPares += valor;
        } else {
            somaImpares += valor;
        }
    }

    // Exibir os resultados
    document.getElementById('somaPares').innerHTML = `Soma dos Pares: ${somaPares}`;
    document.getElementById('somaImpares').innerHTML 
}