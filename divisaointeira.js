let resultadosDiv = document.getElementById('resultadosDiv')
console.log(resultadosDiv)

function numeros() {
    const numeros = [
        document.getElementById('numero1').value,
        document.getElementById('numero2').value,
        document.getElementById('numero3').value,
        document.getElementById('numero4').value || 0,
        document.getElementById('numero5').value || 0
    ];

    let divisiveisPor3e5 = 0;
    let divisiveisPor3 = 0;
    let divisiveisPor5 = 0;

    for (const numero of numeros) {
        if (numero % 3 === 0 && numero % 5 === 0) {
            divisiveisPor3e5++;
        } else if (numero % 3 === 0) {
            divisiveisPor3++;
        } else if (numero % 5 === 0) {
            divisiveisPor5++;
        }
    }

    
    resultadosDiv.innerHTML =` <p>Resultados da análise:</p>
    <p>Divisíveis por 3 e 5: ${divisiveisPor3e5}</p>
    <p>Divisíveis por 3: ${divisiveisPor3}</p>
    <p>Divisíveis por 5: ${divisiveisPor5}</p>`;
}




