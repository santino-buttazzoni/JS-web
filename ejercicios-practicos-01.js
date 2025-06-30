// Declarar una variable con tu nombre y mostrarla por consola.
// let nombre ="Santino"
// console.log(nombre)
// Declarar una constante con tu edad y mostrarla.
// let edad = 20
// console.log(edad)
// Usar let para crear una variable y cambiar su valor dos veces.
// let edad2 = 20
// edad2 = 21
// console.log(edad2)
// Crear un programa que calcule el doble de un número.
// let numero = 10
// console.log(numero * 2)
// Crear una función que reciba un nombre y lo salude.
// function saludar(nombre) {
//     console.log(`Hola ${nombre}`)
// }
// saludar("Santino")
// Crear una función flecha que retorne el cuadrado de un número.
// let cuadrado = (numero) => numero * numero
// console.log(cuadrado(5))
// Pedir al usuario un número y decir si es positivo o negativo.
// let numero = 10
// if (numero > 0) {
//     console.log("El número es positivo")
// } if (numero < 0){
//     console.log("El número es negativo")
// } else (numero === 0){
//     console.log("El numero es cero")
// }
// Pedir al usuario dos números y mostrar el mayor.
// let numero1 = 0
// let numero2 = 0
// if (numero1 > numero2){
//     console.log("El primer numero es mayor")
// } else if (numero1 < numero2){
//     console.log("El segundo numero es mayor")
// } else {
//     console.log("Los numeros son iguales")
// }
// numero1 = 10
// numero2 = 20
// Verificar si un número es par o impar.
// let numero3 = 10
// if (numero3 % 2 === 0){
//     console.log("El numero es par")
// } else {
//     console.log("El numero es impar")
// }
// Determinar si una persona puede votar (mayor o igual a 18).
// let edades = [17, 18, 20, 15, 25, 16, 30]

// // Pedir edad al usuario
// let edadUsuario = parseInt(prompt("Ingresa tu edad:"))

// // Analizar la edad usando array.length
// if (edadUsuario >= 18) {
//     console.log(`Puedes votar. Eres mayor de edad.`)
// } else {
//     console.log(`No puedes votar. Eres menor de edad.`)
// }
// Crear una función que diga si un número es múltiplo de 5.
// function multiploDeCindo (numero) {
//     if (numero % 5 === 0) {
//         console.log (`${numero} es multiplo de 5`)
//     } else { 
//         console.log (`${numero} no es multiplo de 5`)
//     }
// }

// // Declarar la variable continuar fuera del bucle
// let continuar;

// do{
//     // Pedir un numero al usuario
//     let numeroUsuario = parseInt(prompt("Ingrese un numero:"))

//     //Llamar a la funcion
//     multiploDeCindo (numeroUsuario)

//     //Preguntar si continua
//     continuar = prompt("Quiere continuar introduciendo números? (si/no)")
// } while (["si", "sí"].includes(continuar.toLowerCase()))
// Mostrar los números del 1 al 10 usando un for.
// for (let i = 1; i <= 10; i++) {
//     console.log(`Número: ${i}`)
// }
// Mostrar los números pares del 2 al 20 usando un while.
// let numero = 2;

// while (numero <=20){
//     console.log(numero)
//     numero += 2
// }
// Mostrar los múltiplos de 3 del 1 al 30 usando do while.
// let numero = 3;

// do {
//     console.log(numero)
//     numero += 3
// } while (numero <= 30)
// Sumar todos los números del 1 al 100.
// let numero = 1;

// while (numero <= 100) {
//     console.log(numero)
//     numero ++
// }
// Calcular el promedio de 5 números.
// let suma = 0;
// let contador = 0;

// while (contador < 5) {
//     let numero = parseInt(prompt("Ingrese un numero:"))
//     suma += numero;
//     contador++
// }

// let promedio = suma / 5;
// console.log(`El promedio es ${promedio}`)
// Crear un contador que reste desde 10 hasta 0.
// let numero = 10;

// while (numero >= 0) {
//     console.log(`El valor actual del contador es ${numero}`)
//     numero--
// }
// Mostrar la tabla del 5 (de 5x1 a 5x10).
// console.log("Tabla del 5:")

// for(let i = 1; i <= 10; i++) {
//     let resultado = 5 * i;
//     console.log(`5 x ${i} = ${resultado}`)
// }
// Crear una función que reciba un número y devuelva su factorial.
// Crear una función flecha que convierta grados Celsius a Fahrenheit.
// Pedir al usuario un número entre 1 y 7 y mostrar el día correspondiente.
// Crear una función que determine si una letra es vocal o consonante.
// Mostrar los primeros 10 números impares.
// Calcular cuántos números pares hay entre 1 y 100.
// Mostrar todos los divisores de un número.
// Contar cuántas veces aparece una letra en una palabra.
// Determinar si una palabra es palíndromo.
// Sumar todos los dígitos de un número.
// Crear una función que devuelva la cantidad de caracteres de un texto.
// Repetir un mensaje 10 veces con un bucle.
// Generar 10 números aleatorios del 1 al 100.
// Contar cuántos de esos 10 números aleatorios son mayores a 50.
// Crear una función que invierta una cadena de texto.
// Pedir una edad y clasificarla como niño, adolescente, adulto o adulto mayor.
// Crear un array de 5 frutas y recorrerlo con un for.
// Crear una función que reciba un array y muestre sus elementos.
// Recorrer un array con for...of y mostrar solo los que empiecen con "A".
// Sumar todos los elementos de un array numérico.
// Contar cuántos elementos tiene un array.
// Crear una función flecha que devuelva el elemento mayor de un array.
// Eliminar el último elemento de un array y mostrar el nuevo array.
// Agregar un elemento al principio de un array.
// Usar splice para eliminar un elemento en cierta posición.
// Filtrar manualmente los números mayores a 50 de un array.
// Reemplazar un valor en un array (por índice).
// Crear un array de edades y clasificar cada una como mayor o menor.
// Crear una función que cuente cuántos mayores de edad hay en una lista.
// Crear una función flecha que reciba 2 números y devuelva el menor.
// Calcular el promedio de un array de números.
// Contar cuántos elementos del array son divisibles por 3.
// Mostrar los números del 1 al 100 pero omitir los múltiplos de 4.
// Pedir al usuario números hasta que ingrese "0".
// Sumar todos los números ingresados hasta que ponga "0".
// Mostrar solo los caracteres en posición par de un texto.
// Mostrar cada letra de una palabra en una línea nueva.
// Mostrar la cantidad de letras mayúsculas de un texto.
// Validar si una cadena contiene solo números.
// Validar si una cadena contiene solo letras.
// Crear una función que determine si un número es primo.
// Crear un programa que calcule el total a pagar con IVA (21%).
// Crear una función que muestre un menú con 3 opciones.
// Crear un simulador de cajero: saldo, retirar, depositar.
// Crear una calculadora básica con suma, resta, mult, div.
// Simular tirar un dado y mostrar el resultado.
// Crear una función que reciba un nombre y apellido y devuelva el nombre completo.
// Crear un array con 5 nombres y mostrar solo los que tengan más de 5 letras.
// Crear un programa que sume solo los números positivos de un array.
// Crear un programa que muestre cuántos elementos son string en un array mixto.
// Crear una función que determine si un número tiene decimales.
// Filtrar de un array solo los números enteros.
// Filtrar de un array solo los números con decimales.
// Mostrar la suma de todos los números decimales.
// Convertir todos los elementos tipo string de un array a números (si es posible).
// Determinar cuántos elementos no son números en un array.
// Eliminar todos los elementos no numéricos de un array.
// Convertir los números tipo string a number en un array mixto.
// Crear una función que reciba un array y devuelva otro con los números al cuadrado.
// Mostrar el índice de cada elemento de un array mientras lo recorres.
// Eliminar los duplicados manualmente de un array (sin Set).
// Mostrar las letras de una palabra una por una con for.
// Mostrar las letras de una palabra una por una con while.
// Mostrar las letras de una palabra una por una con do while.
// Mostrar cuántas letras tiene un texto sin usar .length.
// Crear una función que cuente cuántas palabras tiene un texto.
// Contar cuántos espacios hay en una cadena de texto.
// Reemplazar las vocales de un texto por "*".
// Contar cuántas veces aparece la letra "a" en un texto.
// Crear un array vacío e ir llenándolo con un bucle.
// Crear un menú que se repita hasta elegir "Salir".
// Hacer un juego de adivinanza con número aleatorio entre 1 y 10.
// Reintentar la adivinanza hasta acertar.
// Limitar los intentos del juego a 3.
// Simular que un número es una contraseña; permitir 3 intentos.
// Crear una agenda: pedir nombre y teléfono 5 veces.
// Buscar un nombre en la agenda.
// Eliminar un contacto de la agenda por índice.
// Mostrar cuántos contactos hay en la agenda.
// Crear una función flecha que devuelva el número más chico de 3.
// Crear una función que reciba una edad y retorne un mensaje personalizado.
// Crear una función que combine dos arrays y los devuelva juntos.