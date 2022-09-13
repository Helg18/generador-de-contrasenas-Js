// Lista de caracteres mayusculas, minusculas, numeros y signos.
const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minus = "abcdefghijklmnoppqrstuvwxyz"
const numeros = "0123456789"
const speciales = "!@#$%&*.,{}'"

// Mostrar la cantidad de caracteres en la contrasena actual
document.getElementById('labelLong').value = document.getElementById('longitud').value;


// Obtener un numero entero 
function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}


// Genera una contrasena a partir del minimo de caracteres selecionado
// por el usuario y lo devuelve al input principal de la app
function generar() {

    // Contrasena esta vacio por defecto
    var password = '';

    // obtiene el numero de caracteres que sera la longitud de la contrasena
    let longitud = document.getElementById('longitud').value;

    // Mostrar la cantidad de caracteres en la contrasena actual
    document.getElementById('labelLong').innerHTML = 'Longitud: ' + longitud + ' caracteres'

    // Comienza a generar la contrasena
    for (let index = 0; index < longitud; index++) {
        const element = getRandomNumber(5);

        // Mayusculas
        if (element == 0) {
            let letter = getRandomNumber(26);
            password = password + mayus[letter];
        }

        // Minusculas
        if (element == 1) {
            let letter = getRandomNumber(26);
            password = password + minus[letter];
        }

        // Numeros
        if (element == 2) {
            let letter = getRandomNumber(9);
            password = password + numeros[letter];
        }

        // Especiales
        if (element == 3 || element == 4) {
            let letter = getRandomNumber(11);
            password = password + speciales[letter];
        }

    }

    // Asigna el valor de la contrasena en el input general de la app
    document.getElementById("password").setAttribute('value', password);

}

// Copiar al porta papeles cuando se hace clic en el input principal de la app
function copyToClipBoard() {

    var content = document.getElementById('password');

    // valida que el input no este vacio
    if (content.value.length == 0)
        return false;


    content.select();
    document.execCommand('copy');



    // Lanza el toast para notificar al usuario que se copio al portapapeles 
    // la contrasena creada previamente
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show();
}

