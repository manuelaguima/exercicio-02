function contarDivisiveisPor7() {
    // Obter os valores dos campos de entrada
    const valores = [];
    for (let i = 1; i <= 5; i++) {
        const valorInput = document.getElementById(`valor${i}`).value;
        if (valorInput !== '') {
            const valor = parseInt(valorInput);
            if (isNaN(valor)) {
                alert(`Valor inválido no campo ${i}! Digite um número.`);
                return;
            }
            valores.push(valor);
        }
    }

    // Inicializar contador
    let divisiveisPor7 = 0;

    // Processar cada valor do array
    for (const valor of valores) {
        if (valor % 7 === 0) {
            divisiveisPor7++;
        }
    }

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = `Números Divisíveis por 7: ${divisiveisPor7}`;
}
