/* Ejmplo Practico
 * Crea un programa en JavaScript que actúe como una calculadora simple. El programa debe permitir al usuario
 * ingresar dos números y seleccionar una operación matemática básica (suma, resta, multiplicación o división) 
 * usando un menú presentado a través de prompt. Después de realizar la operación seleccionada, el programa debe 
 * mostrar el resultado al usuario y preguntar si desea realizar otra operación. El programa continuará ejecutándose 
 * hasta que el usuario decida salir escribiendo "salir". */

let continuar;

do {
    let operacion = prompt("Elija la operacion entre: (+, -, *, /")

    let resultado;

    let numeroA = parseFloat(prompt("Ingrese el 1er Numero"));
    if (isNaN(numeroA)) {
        console.log("Che nabo, ingresa un numeroA valido.!!");
        continue;
    }
    let numeroB = parseFloat(prompt("Ingrese el 2do Numero"));
    if (isNaN(numeroB)) {
        console.log("Che nabo, ingresa un numeroB valido.!!");
        continue;
    }
    switch(operacion){
        case '+':
            resultado = numeroA + numeroB;
            console.log('El resultado de la operacion entre ${numeroA} y ${numeroB} es igual a ${resultado}');
            break;
        case '-':
            resultado = numeroA - numeroB;
            console.log('El resultado de la operacion entre ${numeroA} y ${numeroB} es igual a ${resultado}');
            break;
        case '*':
            resultado = numeroA * numeroB;
            console.log('El resultado de la operacion entre ${numeroA} y ${numeroB} es igual a ${resultado}');
            break; 
        case '/':
            if(numeroB === 0){
                console.error("Error, no se puede dividir por 0")
            }else{
                resultado = numeroA / numeroB;
                console.log('El resultado de la operacion entre ${numeroA} y ${numeroB} es igual a ${resultado}');
            }
            break;
        default:
            console.error("Operacion no valida");
    }
    continuar = prompt("Quiere seguir operando? (si/no)").toLowerCase;
    
    if(continuar.toLowerCase === "salir"){
        continuar = false;
        breack;
    }

    } while(continuar === 'si'); 

    
