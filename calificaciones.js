document.getElementById('btnCalcular').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value.trim();
    const val1 = document.getElementById('cal1').value.trim();
    const val2 = document.getElementById('cal2').value.trim();
    const val3 = document.getElementById('cal3').value.trim();
    const divResultado = document.getElementById('resultado');

    // A. Validación de información
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    if (val1 === "" || val2 === "" || val3 === "") {
        alert("Por favor, ingresa las tres calificaciones antes de calcular.");
        return;
    }

    const c1 = parseFloat(val1);
    const c2 = parseFloat(val2);
    const c3 = parseFloat(val3);

    if (isNaN(c1) || isNaN(c2) || isNaN(c3)) {
        alert("Las calificaciones deben ser valores numéricos válidos.");
        return;
    }

    if (c1 < 0 || c1 > 10 || c2 < 0 || c2 > 10 || c3 < 0 || c3 > 10) {
        alert("Todas las calificaciones deben estar en un rango de 0 a 10.");
        return;
    }

    // B. Calcular el promedio
    const promedio = (c1 + c2 + c3) / 3;
    const promedioFormateado = promedio.toFixed(2);

    // C. Determinar el resultado (APROBADO o REPROBADO) y D. Observación
    let estado = "";
    let observacion = "";
    let colorEstado = "";

    if (promedio >= 9 && promedio <= 10) {
        estado = "APROBADO";
        observacion = "Excelente desempeño";
        colorEstado = "#27ae60";
    } else if (promedio >= 8) {
        estado = "APROBADO";
        observacion = "Muy buen desempeño";
        colorEstado = "#27ae60";
    } else if (promedio >= 7) {
        estado = "APROBADO";
        observacion = "Buen desempeño";
        colorEstado = "#27ae60";
    } else if (promedio >= 6) {
        estado = "APROBADO";
        observacion = "Desempeño suficiente";
        colorEstado = "#27ae60";
    } else {
        estado = "REPROBADO";
        observacion = "Necesita mejorar";
        colorEstado = "#c0392b";
    }

    // Presentar los resultados dentro de la página web
    divResultado.className = "resultado-box";
    divResultado.innerHTML = `
        <p><strong>Estudiante:</strong> ${nombre}</p>
        <p><strong>Calificaciones:</strong> ${c1}, ${c2}, ${c3}</p>
        <p><strong>Promedio obtenido:</strong> ${promedioFormateado}</p>
        <p><strong>Estado:</strong> <span style="color: ${colorEstado}; font-weight: bold;">${estado}</span></p>
        <p><strong>Observación:</strong> ${observacion}</p>
    `;
});
