// Captura de los botones encriptar/desencriptar
var botonEncriptar = document.getElementById("boton-encriptar");
var botonDesencriptar = document.getElementById("boton-desencriptar");

// Captura del boton de copiar
var botonCopiar = document.getElementById("boton-copiar");

// Captura del cuadro de texto para la entrada del usuario
var textoEntrada = document.getElementById("texto-entrada");

// Captura del cuadro de texto para el resultado
var textoResultado = document.getElementById("texto-salida");
// Captura de los objetos que hay cuando el cuadro de texto de entrada esta vacio
var contenedorPersona = document.getElementById("contenedor-persona");

// Dar redimensionamiento automatico al area de texto de entrada
textoEntrada.addEventListener("input", function(){
   
    var smallScreen = window.matchMedia( "(max-width: 475px)" );
    var mediumScreen = window.matchMedia( "(max-width: 768px)" );
    var largeScreen = window.matchMedia( "(min-width: 769px)" );

    if (smallScreen.matches) {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    } else if (mediumScreen.matches) {
        this.style.height = "596px";
    } else if (largeScreen.matches) {
        this.style.height = "683px";
    }

}, false);

// Dar funcionalidad al boton encriptar
botonEncriptar.onclick = mostrarMnsEncrip;
// Dar funcionalidad al boton desencriptar
botonDesencriptar.onclick = mostrarMnsDesencrip;

// Dar funcionalidad al boton copiar
botonCopiar.onclick = copiarAlClipboard;


// Funcion para copiar el texto del resultado
function copiarAlClipboard() {
    let texto = textoResultado.innerHTML;
    // let resultado = navigator.permissions.query({name: "clipboard-write"});
    // if (resultado.state === "granted" || resultado.state === "prompt") {
    //     /* write to the clipboard now */
    // };
    navigator.clipboard.writeText(texto);
}

// Funcion para redimensionar un area de texto
function redimenTxtArea(textArea) {
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
}

// Funcion para mostrar el resultado de la encriptacion
function mostrarMnsEncrip() {
    contenedorPersona.classList.add("oculto");
    textoResultado.classList.remove("oculto");
    textoResultado.innerHTML = encriptar();
    botonCopiar.classList.remove("oculto");
    redimenTxtArea(textoResultado);
}

// Funcion para mostrar el resultado de la desencriptacion
function mostrarMnsDesencrip() {
    contenedorPersona.classList.add("oculto");
    textoResultado.classList.remove("oculto");
    textoResultado.innerHTML = desencriptar();
    botonCopiar.classList.remove("oculto");
    redimenTxtArea(textoResultado);
}

// Funcion para encriptar el mensaje
function encriptar() {
    // Captura mensaje a encriptar
    let str = document.getElementById("texto-entrada").value;
    // Encriptacion del mensaje
    str =  str.replace(/[aeiou]/gi, function(match) {
        switch (match) {
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufat";
        }
    });
    return str;
}

// Funcion para desencriptar el mensaje
function desencriptar() {
    // Captura mensaje a desencriptar
    let str = document.getElementById("texto-entrada").value;
    // Desencriptacion del mensaje
    str = str.replace(/enter|imes|ai|ober|ufat/gi, function(match) {
        switch (match) {
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ai":
                return "a";
            case "ober":
                return "o";
            case "ufat":
                return "u";
        }
    });
    return str;
}