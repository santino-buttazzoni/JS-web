// Numeros
// Float -- decimales (ej: 0,1)
// Integer -- enteros (ej: 1)

let numeroA = 1;
let numeroB = 2;
const NUMEROC = 3;

// funcion que te permite enviar mensajes a la consola del navegador
console.log()

// "" se utilizan para cuando el valor de la variable es una combinacion de simbolos
// '' se utilizan para cuando el valor de la variable es una letra
// sin ningun caracter especial es cuando el valor de la variable es un numero o conjunto de numeros

// Operaciones basicas
let suma = numeroA + numeroB;
console.log(suma)
console.log(numeroA - NUMEROC)
let multiplicacion = numeroA * NUMEROC
console.log(multiplicacion)
let division = numeroB / numeroA
console.log(division)

let stringA = "Hola"
let stringB = "Mundo"
const ESPACIO = " "

// Concatenacion de Strings
console.log(stringA + ESPACIO + stringB)
console.log(stringA, stringB) // la , le va a aplicar un espacio entre los valores

// Prompt -- te muestra la info en la consola del navegador --

let nombre = prompt("Ingrese su nombre"); // te permite ingresar datos en ventanas emergentes
console.log("El nombre ingresado es " + nombre);

let edad = prompt("Ingrese su edad");
let email = prompt("Ingrese su email");

console.log("La edad de " + nombre + " es de " + edad + " años");
console.log("El email de " + nombre + " es " + email);

// TODOS LOS DATOS DEL PROMPT SE GUARDAN COMO STRING (afecta a los numeros)

// Alert -- te muestra la info como ventana emergente --

alert("El nombre ingresado es " + nombre);
alert("La edad de " + nombre + " es de " + edad + " años");
alert("El email de " + nombre + " es " + email);

// Parceo de datos -- pasar un tipo de dato a otro tipo de dato --
let numeroS = parseInt(prompt("Ingrese un numero")); //para converter el dato en un numero entero
let numeroJ = parseInt(prompt("Ingrese otro numero"));
console.log(numeroS + numeroJ);

// NaN --> significa que el dato ingresado NO es un NUMERO

// Control de flujo

// Tipo de dato Booleanos
// VERDADERO o FAlSO -- 2 alternativas -- 

const V = true;
const F = false;

// Condicionales
// si se cumple la condicion (), entonces se ejecuta todo lo que esta entre { }
// if (condicion) {
//     condigo a ejecutar
// }

if(V) { // si lo que recibis es (V) ejecutas . . .
    console.log("El dato es verdadero")
}

let numero = 0;

if (numero == 0) { // si usamos 1 = estamos asiganando, si usamos 2 == estamos comparando
    console.log("El numero ingresado es 0")
} else { // sino . . .
    console.log("El numero ingresado es distinto de 0")
}

// Condicionales anidados

let numero0 = parseFloat(prompt("Ingrese un numero"));

if (isNaN(numero)) {
    alert("Usted No ingreso un numero");
    numero = parseFloat(prompt("Ingrese un numero"));
} else if (numero < 0) {
    console.log("Usted ingreso un Numero Negativo");
} else if (numero > 0) {
    console.log("Usted ingreso un Numero Positivo");
} else {
    console.log("Usted ingreso el Numero Cero");
}


// Tablas de verdad
// const V = true;
// const F = false;
// Operadores logicos

// Operador && (and)
console.log("Tabla de Verdad de Operador && (and)")
console.log(V && V); // true
console.log(V && F); // false
console.log(F && V); // false
console.log(F && F); // false

// Operador || (or)
console.log("Tabla de Verdad de Operador || (or)")
console.log(V || V); // true
console.log(V || F); // true
console.log(F || V); // true
console.log(F || F); // false

// Ejercicio de Ejemplo
let nombreIngresado = prompt("Ingrese su nombre");
let apellidoIngresado = prompt("Ingrese su apellido");

if ((nombreIngresado != "") && (apellidoIngresado != "")) {
    console.log("nombre: " + nombreIngresado + "\napellido: " + apellidoIngresado);
} else {
    alert("Error al ingresar los datos del usuario")
}
