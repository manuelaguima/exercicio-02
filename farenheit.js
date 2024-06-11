function converterFahrenheitParaCelsius() {
    // Obter o valor em Fahrenheit
    const valorFahrenheit = parseFloat(document.getElementById('valorFahrenheit').value);

    // Validar se o valor é um número
    if (isNaN(valorFahrenheit)) {
        alert('Valor inválido! Digite um número para Fahrenheit.');
        return;
    }

    // Converter para Celsius
    const valorCelsius = (valorFahrenheit - 32) * 5 / 9;

    // Exibir o resultado
    document.getElementById('resultadoFahrenheitParaCelsius').innerHTML = `Valor em Celsius: ${valorCelsius.toFixed(2)}`;
}

function converterCelsiusParaFahrenheit() {
    // Obter o valor em Celsius
    const valorCelsius = parseFloat(document.getElementById('valorCelsius').value);

    // Validar se o valor é um número
    if (isNaN(valorCelsius)) {
        alert('Valor inválido! Digite um número para Celsius.');
        return;
    }

    // Converter para Fahrenheit
    const valorFahrenheit = (valorCelsius * 9 / 5) + 32;

    // Exibir o resultado
    document.getElementById('resultadoCelsiusParaFahrenheit').innerHTML = `Valor em Fahrenheit: ${valorFahrenheit.toFixed(2)}`;
}
