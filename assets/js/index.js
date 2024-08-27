// Programacion orientada a objetos

// Creamos un objeto persona
const persona1 = {
    nombre: "Santino",
    edad: 19,
    altura: 1.80,
    email: "santinobutta@gmail.com",
}
const persona2 = {
    nombre: "Alejandro",
    edad: 48,
    altura: 1.80,
    email: "alejandrodistefano@gmail.com",
}

console.log(persona1) // ejecutamos PERSONA1 en la consola y podemos ver los atributos de esa variable

console.log(persona1.nombre) // accedemos directamente al NOMBRE de PERSONA1

persona1["email"] = "santinob@gmail.com"; // reasignamos el valor de un atributo de la persona / objeto

// Definimos un objeto

const objeto = {
    clave: "valor",
    clave: "valor",
    clave: "valor",
    clave: "valor",
    clave: "valor",
}

// Uso de constructores

// Uso de this
// estructura ej:

// aca definimos la estructura de todos los obejetos "Persona"
function Persona(nombre, edad, altura, email){ // todas las personas se definiran de esta forma
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    this.email = email;
}

// Instancia de objeto -> creamos un objeto
const personaA = new Persona("Juan Carlos", 20, 1.90, "juancarlos@gmail.com");
const personaB = new Persona("Valentin", 35, 1.82, "valentinR@gmail.com" );

console.log(personaA);
console.log(personaB);

// Diferencia entre funcion y metodo
// la FUNCION es de uso global 
// el METODO es una funcion propia de un objeto y solo puede ser usada con ese objeto

let cadena = "Hola Santino";

console.log(typeof(cadena)); // typeof nos dice si es un String o Numero

// El string es un objeto que tiene sus propios metodos
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

function saludar(){
    console.log("Hola")
}

saludar() // FUNCION
toUpperCase() // METODO -> solo puede ser llamada desde el objeto en el cual fue creado
cadena.toUpperCase() // forma CORRECTA de llamar al METODO dentro de "cadena"

// los OBJETOS tienen ATRIBUTOS y METODOS

function PERSONA(nombre, edad, altura, email){
    // Atributos
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    this.email = email;
    // Metodos
    this.hablar = function() {console.log("Hola soy " + this.nombre)};
}

const persona11 = new Persona("Juan Carlos", 20, 1.90, "juancarlos@gmail.com");
const persona10 = new Persona("Valentin", 35, 1.82, "valentinR@gmail.com" );
// ambos son una instancia del objeto que ya definimos

// asignamos el metodo a la instancia definida
persona11.hablar() 

// Operador IN -> para saber que atributos existen en un objeto
console.log("nombre" in persona11); // true
console.log("apellido" in persona10); // false

// El operador IN devuelve true si la porpiedad especifica existe en el objeto

// FOR IN
for(const propiedad in persona11){
    console.log(persona11[propiedad]);
}
// Mientras que el bucle FOR ... IN permite acceder a todas las propiedades del obejto
// obteniendo una propiedad por cada interacion 

// Clases 
class Vehiculo{
    // atributos
    constructor(color, categoria, ruedas, marca, motor){
        this.color = color;
        this.categoria = categoria;
        this.ruedas = ruedas;
        this.marca = marca;
        this.motor = motor;
    }
    // metodos
    encender(){
        console.log("El/La " + this.categoria + "esta encendido");
    }
}

const auto = new Vehiculo("Azul", "Auto", 4, "Ford", "V8");
auto.encender()

// ejemplo -> creacion de contructor y clases

class Producto{
    // atributos
    constructor(nombre, precios, stock, categoria){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);
        this.categoria = categoria;
        this.vendido = false;
    }
    // metodos
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;
        console.log("El producto " + this.nombre + "se vendio!");
        console.log("Ahora quedan en stock " + this.stock - 1);
    }
}

const producto1 = new Producto("Azucar", 1250, 100, "cocina");
const producto2 = new Producto("Fernet", 10820, 24, "bebidas");

producto1.sumarIva();
producto1.vender();
