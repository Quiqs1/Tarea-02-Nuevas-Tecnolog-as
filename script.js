const botonAceptar = document.getElementById('botonAceptar');

function verificarEdad() {
    const edad = document.getElementById('edad').value;
    const resultado = document.getElementById('resultado');
    const imagen = document.getElementById('imagen');

    if (edad === "") {
        resultado.textContent = "Por favor, ingresa una edad.";
        imagen.style.display = 'none';
    } else if (edad >= 18) {
        resultado.textContent = "Eres mayor de edad.";
        imagen.style.display = 'block';
    } else {
        resultado.textContent = "No eres mayor de edad.";
        imagen.style.display = 'none';
    }
}

botonAceptar.addEventListener("click", verificarEdad);


function calcularPromedio() {
    const parcial1 = parseFloat(document.getElementById('parcial1').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);
    const parcial3 = parseFloat(document.getElementById('parcial3').value);

    if (parcial1 < 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos (0 a 10).";
        return;
    }
    if (parcial1 > 10) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos (0 a 10).";
        return;
    }
    if (parcial2 < 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos (0 a 10).";
        return;
    }
    if (parcial2 > 10) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos (0 a 10).";
        return;
    }
    if (parcial3 < 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos (0 a 10).";
        return;
    }
    if (parcial3 > 10) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos (0 a 10).";
        return;
    }

    const promedio = (parcial1 * 0.3) + (parcial2 * 0.3) + (parcial3 * 0.4);
    const resultadoDiv = document.getElementById('resultado');
    if (promedio >= 7) {
        resultadoDiv.innerText = `Promedio: ${promedio.toFixed(2)} - ¡Aprobado!`;
    } else {
        resultadoDiv.innerText = `Promedio: ${promedio.toFixed(2)} - Reprobado.`;
    }
}





function determinarCuadrante() {
    const x = parseFloat(document.getElementById("coordX").value);
    const y = parseFloat(document.getElementById("coordY").value);
    let resultado = '';

    if (x === 0 && y === 0) {
        resultado = "El punto está en el origen.";
    } else if (x === 0) {
        resultado = "El punto está en el eje Y.";
    } else if (y === 0) {
        resultado = "El punto está en el eje X.";
    } else if (x > 0 && y > 0) {
        resultado = "El punto está en el primer cuadrante.";
    } else if (x < 0 && y > 0) {
        resultado = "El punto está en el segundo cuadrante.";
    } else if (x < 0 && y < 0) {
        resultado = "El punto está en el tercer cuadrante.";
    } else if (x > 0 && y < 0) {
        resultado = "El punto está en el cuarto cuadrante.";
    }

    document.getElementById("resultado2").innerText = resultado;
}