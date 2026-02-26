// --- 1. VARIABLES Y CONDICIONES ---
function verificarEdad() {
    // 1. Obtenemos la edad y los elementos de las alertas
    var edad = document.getElementById("campoEdad").value;
    var alertaVerde = document.getElementById("alertaMayor");
    var alertaRoja = document.getElementById("alertaMenor");

    // 2. Limpiamos: ocultamos ambas antes de revisar
    alertaVerde.style.display = "none";
    alertaRoja.style.display = "none";

    // 3. Validación básica
    if (edad === "") {
        alert("Escribe una edad primero");
        return;
    }

    // 4. Lógica de la Condición
    if (parseInt(edad) >= 18) {
        // Mostramos el cuadro verde
        alertaVerde.style.display = "block";
    } else {
        // Mostramos el cuadro rojo
        alertaRoja.style.display = "block";
    }
}
// --- 2. CICLOS Y ARREGLOS ---
function generarTabla() {
    // 1. Declaramos variables con nombres fáciles
    var numeroUsuario;
    var i;
    var multiplicacion;
    var listaDeResultados = []; // Este es nuestro ARREGLO

    // 2. Traemos el número que escribieron en el cuadrito "campoNumero"
    numeroUsuario = document.getElementById("campoNumero").value;

    // 3. Verificamos que no esté vacío
    if (numeroUsuario == "") {
        alert("Por favor, escribe un número primero");
        return; // Detiene la función
    }

    // 4. EL CICLO: Repetimos 10 veces
    for (i = 1; i <= 10; i = i + 1) {
        multiplicacion = numeroUsuario * i;

        // Guardamos el texto en el ARREGLO
        listaDeResultados.push(numeroUsuario + " x " + i + " = " + multiplicacion);
    }

    // 5. MOSTRAR RESULTADO: Ponemos la lista en el div de la página
    // .join("<br>") hace que cada resultado salga en un renglón nuevo
    document.getElementById("resultadoTabla").innerHTML = listaDeResultados.join("<br>");
}
var cuenta = 0; // La variable debe estar AFUERA de la función

function sumarUno() {
    cuenta = cuenta + 1;
    document.getElementById("contador").innerText = cuenta;
}

function reiniciar() {
    cuenta = 0;
    document.getElementById("contador").innerText = cuenta;
}