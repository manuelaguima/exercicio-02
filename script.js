function calcularVolume() {
    // Obter valores dos campos de entrada
    const lado = parseFloat(document.getElementById('lado').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Validar se os valores são números positivos
    if (isNaN(lado) || lado <= 0 || isNaN(altura) || altura <= 0) {
        alert('Valores inválidos! Digite números positivos para o lado e a altura da pirâmide.');
        return;
    }

    // Calcular o volume
    const volume = (lado * lado * altura) / (3 * 2);

    // Exibir o volume no campo de resultado
    document.getElementById('resultado').innerHTML = `Volume da Pirâmide Quadrada: ${volume.toFixed(2)}`;
}
