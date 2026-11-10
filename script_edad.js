function verificar() {
    let inputEdad = document.getElementById("edad");
    let valor = inputEdad.value;

    if (valor === "") {
        alert("El campo no puede estar vacío");
    } else if (valor < 0) {
        alert("Ingresa un número válido y mayor o igual a cero");
    } else if (valor >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}
