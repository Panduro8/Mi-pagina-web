document.getElementById('btnConvertir').addEventListener('click', function() {
    const inputCampo = document.getElementById('temperatura');
    const valorInput = inputCampo.value.trim();
    const tipoConversion = document.getElementById('tipoConversion').value;
    const divResultado = document.getElementById('resultado');

    if (valorInput === "") {
        alert("Por favor, ingresa un valor de temperatura antes de continuar.");
        return;
    }

    const temperatura = parseFloat(valorInput);
    let resultadoCalculado = 0;
    let unidadOrigen = "";
    let unidadDestino = "";

    if (tipoConversion === "cToF") {
        resultadoCalculado = (temperatura * 9 / 5) + 32;
        unidadOrigen = "°C";
        unidadDestino = "°F";
    } else if (tipoConversion === "fToC") {
        resultadoCalculado = (temperatura - 32) * 5 / 9;
        unidadOrigen = "°F";
        unidadDestino = "°C";
    }

    const resultadoFormateado = resultadoCalculado.toFixed(2);

    divResultado.innerHTML = `
        <p><strong>Temperatura ingresada:</strong> ${temperatura} ${unidadOrigen}</p>
        <p><strong>Resultado:</strong> ${resultadoFormateado} ${unidadDestino}</p>
    `;
});
