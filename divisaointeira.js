function contarDivisiveis() {
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

    // Inicializar contadores
    let divisiveis3e5 = 0;
}