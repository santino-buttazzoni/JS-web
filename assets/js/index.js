// Ciclos e Iteraciones, pueden ser:

// 1) Ciclos por conteo
// - Esttructura for


// 2) Ciclos condicionales
// - Estructura while
let repetir = true
while(repetir){ // mientras sea true se ejecuta infinitamente
    console.log("Hasta el infinito y mas alla . . .")
} 

// - Estructura do while
let nuevamente = false;
do {
    console.log("Solo una vez") // PRIMERO hace esto 
} while(nuevamente); // DESPUES analiza si es true o no para hacerlo indefinidamente

// ejemplo DO WHILE
let numeroDoWhile = 0;
do {
    numeroDoWhile = prompt("Ingrese un numero")
    console.log(numeroDoWhile)
} while (parseInt(numeroDoWhile));

// reemplazamos esto (debajo)
let numero;
numero = 0;
console.log(numero);
numero = numero + 1; // vale 1
console.log(numero);
numero = numero + 1; // vale 2
console.log(numero);
numero = numero + 1; // vale 3
console.log(numero);
numero = numero + 1; // vale 4
console.log(numero);

// por esto
for (let i = 0; i < 5; i++){ // i hace referencia a la variable asignada
    console.log(i);
}
// i++ es igual a decir i = i + 1
// for ( desde; hasta; autoincrementacion o autodecrementacion) {
//      lo que quieres que se repita
// }

// ejemplo practico --> FOR y WHILE
let ingreseNumero = parseInt(prompt("Ingrese un numero"));
let valorIngresado = isNaN(ingreseNumero); // o puede ser true o flase la condicion
if (isNaN(ingreseNumero)){ // si valorIngresado es true
    console.log("Usted ha ingresado un String");
        while(valorIngresado){
        ingreseNumero = parseInt(prompt("Ingrese un numero"));
        valorIngresado = isNaN(ingreseNumero);
    }
}
// si valorIngresado es false, sigue de largo a la siguiente accion
console.log("Tabla de multiplicar del " + ingreseNumero);
    for(let i = 1; i <= 10; i++){
        let resultado = ingreseNumero * i;
        console.log(ingreseNumero + " x " + i + " = " + resultado);
    }


//Estructura Switch 
let numeroDia = parseInt(prompt("Ingrese el dia de la semana (1-7)"));
switch (numeroDia){
    case 1:
        console.log("Hoy es Lunes");
        break;
    case 2: 
        console.log("Hoy es Martes");
        break;
    case 3: 
        console.log("Hoy es Miercoles");
        break;
    case 4: 
        console.log("Hoy es Jueves");
        break;
    case 5: 
        console.log("Hoy es Viernes");
        break;
    case 6: 
        console.log("Hoy es Sabado");
        break;
    case 7: 
        console.log("Hoy es Domingo");
        break;
    default: 
        console.log("Ingrese el dia de la semana (1-7)")
        numeroDia = parseInt(prompt("Ingrese el dia de la semana (1-7)"));
        break; // agregarle un WHILE para que sea en bucle
}