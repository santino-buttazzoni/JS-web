// ### Problema 1: Calculadora de Descuentos
// **Nivel de dificultad: Básico**

// **Descripción:**
// Crea un programa que calcule el precio final de un producto después de aplicar un descuento. 
// El usuario debe ingresar el precio original del producto y el porcentaje de descuento. 
// El programa debe mostrar el precio final.

// **Objetivos:**
// - Uso de variables.
// - Uso de operadores aritméticos.
// - Manejo de entradas y salidas con `prompt` y `console.log`.

let precioOriginal = parseFloat(prompt("Ingrese el precio original del Producto"));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de Descuento a Aplicar"));

console.log("El Precio final es: $", precioOriginal - (precioOriginal * porcentajeDescuento / 100));

// ### Problema 2: Contador de Números Pares
// **Nivel de dificultad: Básico**

// **Descripción:**
// Crea un programa que cuente cuántos números pares hay entre 1 y un número dado por el usuario. 
// El programa debe usar un ciclo para recorrer los números y contar cuántos son pares.

// **Objetivos:**
// - Uso de ciclos (`for` o `while`).
// - Uso de condicionales (`if`).
// - Manejo de entradas y salidas.

let limite = parseInt(prompt("Ingrese un numero"));

let contador = 0;

for(let i = 1; i <= limite; i++) { // i es el Iterador
    if(i % 2 === 0) { // Esto es para los Pares
        contador++;
    }
}
console.log("La antidad de Numeros Pares entre 1 y " 
            + limite + ", es de: " + contador + " números.");

// ### Problema 3: Calculadora de Sueldos
// **Nivel de dificultad: Intermedio**

// **Descripción:**
// Crea un programa que calcule el sueldo total de un empleado basado en su salario base y las horas extra trabajadas. 
// El programa debe pedir al usuario el salario base, el número de horas extra
// y la tarifa de pago por hora extra. Luego, el programa debe calcular y mostrar el sueldo total.

// **Objetivos:**
// - Creación de funciones para realizar cálculos.
// - Uso de operadores aritméticos.
// - Uso de condicionales y ciclos para validar entradas.

let salarioBase = parseFloat(prompt("Ingrese el salario Base: "))
let horasExtra = parseInt(prompt("Ingrese la cantidad de Horas Extra"))
let tarifaHoraExtra = parseFloat(prompt("Ingrese la tarifa de la Hora Extra"))

const calcularSueldo = (salario, horas, tarifa) => {
    let pagoExtra = horas * tarifa;    
    return salario + pagoExtra;
}

let sueldoTotal = calcularSueldo(salarioBase, horasExtra, tarifaHoraExtra);

console.log("El sueldo total es de: $",  sueldoTotal.toFixed(2));

// ### Problema 4: Agenda de Contactos
// **Nivel de dificultad: Intermedio**

// **Descripción:**
// Crea un programa que simule una agenda de contactos básica. 
// El programa debe permitir al usuario agregar un contacto (nombre y número de teléfono) 
// y mostrar todos los contactos guardados. Debe ser capaz de almacenar múltiples contactos.

// **Objetivos:**
// - Introducción al uso de objetos en JavaScript.
// - Uso de funciones para agregar y mostrar contactos.
// - Uso de un ciclo para recorrer los contactos.

let agenda = []; // Definimos un Array (lista) vacio.

const agregarContacto = (nombre , telefono) => {
    let contacto = {
        nombre: nombre,
        telefono: telefono
    }
    agenda.push(contacto);
}

const mostrarContacto = () => {
    console.log(agenda);
}

let continuar;

do{
    let nombre = prompt("Ingrese un Nombre");
    let telefono = parseInt(prompt("Ingrese el telefono"));

    if(isNaN(telefono) || telefono <= 0) {
        console.error("Ingrese un telefono valido")
        continue;
    }

    agregarContacto(nombre, telefono);

    continuar = prompt("¿Desea cargar otro contacto? (si/no)").toLowerCase();

}while(continuar === 'si');

mostrarContacto();

// ### Problema 5: Sistema de Gestión de Productos (Versión Simplificada)
// **Nivel de dificultad: Intermedio-Avanzado**

// **Descripción:**
// Crea un programa que permita gestionar un solo producto en un inventario. 
// El programa debe permitir al usuario agregar un producto con su nombre, 
// precio y cantidad en stock, vender parte del stock y mostrar la información del producto.

// **Objetivos:**
// - Creación de una clase `Producto`.
// - Uso de métodos para manipular los datos del producto.
// - Uso de un ciclo para interactuar con el usuario.

class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        if (cantidad <= this.stock){
            this.stock -= cantidad;
            console.log(`Se vendieron ${cantidad} unidades de ${this.nombre}`);
        } else {
            console.error("Error, no hay suficiente stock para vender " + cantidad + " de este producto")
        }
    }

    mostrarInformacion(){
        console.log(
            "Producto: " + this.nombre + "\n" +
            "Precio: $" + this.precio + "\n" +
            "Stock disponible: " + this.stock + "\n"
        )
    }
}
    let nombreProducto = prompt("Ingrese el Nombre del Producto");
    let precioProducto = parseFloat(prompt("Ingrese el Precio"));
    if (isNaN(precioProducto) || precioProducto <= 0){
        console.error("Error, Ingrese un Precio correcto")
    }
    
    let stockProducto = parseInt(prompt("Ingrese el Stock Inicial"))
    if (isNaN(stockProducto) || stockProducto <= 0){
        console.error("Error, Ingrese un Stock correcto")
    }
    
    const producto1 = new Producto(nombreProducto, precioProducto, stockProducto);

    producto1.mostrarInformacion();
    
    let cantidadAVender = parseInt(prompt("Ingrese la cantidad de " 
                            + producto1.nombre + " que desea Vender"));
    
    producto1.vender(cantidadAVender);
    
    producto1.mostrarInformacion();

/**
 * ### Problema 6: Perfil de Usuario
    Descripción: Crea un programa que gestione un perfil de usuario. 
    El programa debe permitir al usuario ingresar su nombre, edad y 
    correo electrónico, y luego mostrar esta información en la consola.

    Objetivos:

    Introducción al uso de objetos en JavaScript.
    Uso de funciones para establecer y mostrar las propiedades de un objeto.
 * 
 */

    class Usuario{
        constructor(nombre, edad, email){
            this.nombre = nombre;
            this.edad = edad;
            this.email = email
        }
        mostrarPerfilDeUsuario(){
            console.log(
                            "Perfil del Usuario:\n" + 
                            "-------------------\n" + 
                            "Nombre: " + this.nombre + "\n" +
                            "Edad: " + this.edad + "\n" +
                            "Correo Electrónico: " + this.email
                        )
        }
    }
    
    let nombreUsuario = prompt("Ingrese el Nombre del Usuario");
    let edadUsuario = parseInt(prompt("Ingrese la Edad del Usuario"));
    if (isNaN(edadUsuario) || edadUsuario <= 0){
        console.error("Error, Ingrese una Edad correcta")
    }
    let emailUsuario = prompt("Ingrese el Email del Usuario");
    
    const usuario1 = new Usuario(nombreUsuario, edadUsuario, emailUsuario);
    
    usuario1.mostrarPerfilDeUsuario();

