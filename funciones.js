// --- EJERCICIO 1: CAJAS (Prompt, Funciones, Condiciones) ---
function generarCajas() {
    // 1. Uso de PROMPT para captura de datos
    var respuesta = prompt("¿Cuántas cajas (articles) deseas colocar?");
    var num = parseInt(respuesta);
    var contenedor = document.getElementById("contenedorCajas");
    
    // Validación básica
    if (isNaN(num) || num <= 0) return;
    
    contenedor.innerHTML = ""; // Limpiar antes de iniciar
    
    // 2. CONDICIONES para definir colores y orientación
    var colorTexto, colorFondo, claseAcomodo;
    
    if (num <= 8) {
        // Requisito: Menor a 8 -> Letra f3c623, Fondo 10375c, Vertical
        colorTexto = "#f3c623";
        colorFondo = "#10375c";
        claseAcomodo = "d-flex flex-column align-items-center"; // Vertical en Bootstrap
    } else {
        // Requisito: Mayor a 8 -> Letra 10375c, Fondo f3c623, Horizontal
        colorTexto = "#10375c";
        colorFondo = "#f3c623";
        claseAcomodo = "d-flex flex-wrap justify-content-center"; // Horizontal en Bootstrap
    }
    
    // Aplicamos la clase de acomodo al contenedor
    contenedor.className = "mt-4 gap-2 " + claseAcomodo;
    
    // 3. CICLO para crear los articles solicitados
    for (var i = 1; i <= num; i++) {
        var nuevoArticle = document.createElement("article");
        nuevoArticle.innerText = "Caja " + i;
        
        // Aplicamos los estilos específicos de la maestra
        nuevoArticle.style.color = colorTexto;
        nuevoArticle.style.backgroundColor = colorFondo;
        nuevoArticle.style.padding = "15px";
        nuevoArticle.style.width = "150px";
        nuevoArticle.style.textAlign = "center";
        nuevoArticle.style.borderRadius = "5px";
        nuevoArticle.style.fontWeight = "bold";
        
        contenedor.appendChild(nuevoArticle);
    }
}
// --- EJERCICIO 2: VOTOS (Switch) ---
function votar() {
    // Obtenemos el valor tal cual viene del SELECT
    var seccion = document.getElementById("seccionCiudad").value;
    var res = document.getElementById("resVoto");
    var mensaje;

    // Usamos SWITCH para validar la selección exacta
    switch(seccion) {
        case "Norte":
            mensaje = "Voto registrado para la sección Norte.";
            res.style.backgroundColor = "#d1f2eb"; // Verde clarito como tu foto
            res.style.color = "#117a65";
            break;
        case "Sur":
            mensaje = "Voto registrado para la sección Sur.";
            res.style.backgroundColor = "#d1f2eb";
            res.style.color = "#117a65";
            break;
        case "Centro":
            mensaje = "Voto registrado para la sección Centro.";
            res.style.backgroundColor = "#d1f2eb";
            res.style.color = "#117a65";
            break;
        default:
            // Este mensaje sale si el valor no coincide (image_7098f6.png)
            mensaje = "Por favor selecciona una sección válida.";
            res.style.backgroundColor = "#f2dede"; // Rojo clarito de error
            res.style.color = "#a94442";
    }

    res.innerText = mensaje;
}
// --- EJERCICIO 3: SUELDO (Condiciones anidadas) ---
function calcularSueldo() {
    var años = parseInt(document.getElementById("añosEmpresa").value);
    var sueldoBase = 40000;
    var aumento = 0;

    if (años > 10) aumento = 0.10;
    else if (años > 5) aumento = 0.07;
    else if (años > 3) aumento = 0.05;
    else aumento = 0.03;

    var total = sueldoBase + (sueldoBase * aumento);
    document.getElementById("resSueldo").innerHTML = "Aumento: " + (aumento*100) + "%<br>Sueldo Total: " + total + " euros.";
}

// --- EJERCICIO 4: CICLOS (While y For) ---
function sumaImpares() {
    var suma = 0;
    for(var i=1; i<=100; i++) { if(i % 2 !== 0) suma += i; }
    document.getElementById("resImpares").innerText = "La suma es: " + suma;
}

function mostrarAsteriscos() {
    var n = prompt("¿Cuántos asteriscos?");
    var s = "";
    var i = 0;
    while(i < n) { s += "* "; i++; }
    document.getElementById("resAsteriscos").innerText = s;
}

// --- EJERCICIO 5: ARREGLOS ---
function probarArreglos() {
    // Array original de 10 países
    var paises = ["México", "España", "Canadá", "Japón", "Brasil", "Francia", "Italia", "Alemania", "China", "India"];
    var contenedor = document.getElementById("resPaises");
    
    // 1. .pop(): Elimina el último elemento ("India")
    paises.pop();
    
    // 2. .push(): Agrega un nuevo elemento al final
    paises.push("Chile");
    
    // 3. .sort(): Ordena alfabéticamente
    paises.sort();
    
    // 4. .reverse(): Invierte el orden de la lista
    paises.reverse();
    
    // 5. .join(): Crea una cadena de texto simple uniendo los elementos con " - "
    // Esto es lo que crea la línea de texto simple que buscas
    var textoFinal = "Resultado: " + paises.join(" - ");
    
    // Inyectamos el texto simple en el contenedor del HTML
    contenedor.innerHTML = '<p class="fw-bold fs-5">' + textoFinal + '</p>';

}
function generarTablasMultiplicar() {
    var contenedor = document.getElementById("resultadoTabla");
    contenedor.innerHTML = ""; 
    var contenido = "";

    // Ciclo para tablas del 1 al 10
    for (var i = 1; i <= 10; i++) {
        contenido += "<strong>Tabla del " + i + ":</strong><br>";
        for (var j = 1; j <= 10; j++) {
            contenido += i + " x " + j + " = " + (i * j) + " | ";
        }
        contenido += "<br><br>";
    }
    contenedor.innerHTML = contenido;
}