

//Cadena de caracteres => string ' ', " ", ` ` (esta ultima es el acento debajo del 7)
//Variables
//var es una Variable Global
//let es una Variable Local
//const es una Constante
var nombre = "Pepe";
let edad = 50
let apellido = 'Perez' 
const DNI = 123456789;
let falso = false
let verdadero = true

//alert('Hola Mundo') no lo puede ejecutar en la terminal porque necesita del navegador 

/*
console.log('Mi nombre es ' + nombre + ' y mi edad es ' + edad);
console.log("Mi nombre es " + nombre + " y mi edad es " + edad)
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)
*/

console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)

console.log('======================================');

//Operadores matematico
// + - * / % **

//Operadores relacionales
// == != < > <= => ===

//Operadores logicos
// || && !

let uno = 500
let dos = 800

let resultado = uno + dos
console.log(resultado);

resultado = uno - dos
console.log(resultado);

resultado = uno * dos
console.log(resultado);

resultado = dos / uno
console.log(resultado);

resultado = uno % dos    //este es el modulo, es decir, es el resto de la division
console.log(resultado);

resultado = 5 ** 3
console.log(resultado);

//Contador de paso 1
uno++;   //Incremental
console.log(uno)
uno--;   //Decremental
console.log(uno)


//Acumulador
let acumulador = 0;
console.log(acumulador)
acumulador += 5;
console.log(acumulador)

acumulador = 10;
console.log(acumulador)
acumulador -= 5;
console.log(acumulador)

console.log('======================================');

/* nombre = prompt('Por favor, introduzca su nombre:');

console.log(`Hola ${nombre}, bienvenido a mi pagina web`);

alert(`Hola ${nombre}, bienvenido a mi pagina web`); */

console.log('======================================');
console.log('======================================');

//Operadores relacionales
resultado = dos == uno;
console.log(resultado);

resultado = dos != uno;
console.log(resultado);

resultado = dos >= uno;
console.log(resultado);

resultado = dos <= uno;
console.log(resultado);

resultado = dos < uno;
console.log(resultado);

resultado = dos < uno;
console.log(resultado);

console.log('======================================');

//Operadores condicionales
let miedad = 15;

if(edad >= 18){
    console.log('El cliente puede comprar bebidas alcoholicas');
}else{
    console.log('El cliente no puede comprar bebidas alcoholicas porque es menor de edad');
}

console.log('======================================');

let saldo = 10000;
let compra = 7500;
let cliente = 123456789
let persona = 1234567894

//       V                      F
if(saldo >= compra && cliente == persona){//&& => true
    console.log('La compra se a realizado con exito');
}else{
    console.log('No se a podido realizar la compra por falta de saldo y/o no es el cliente');
}

console.log('======================================');
let user = 'pepe';
let password = '123456454'

// El ilogico tienen que evalua que todas las condiciones sean verdaderas
//       V                     V                   V
if(user == 'pepe' && password == '123456' && facial == true){//&& => true
    console.log('Bienvenido a la app');
}else{
    console.log('No tienes acceso a la app')
}

console.log('======================================');

// El ologico evalia 1 condicion verdadera las demas no le importa
//       V                     F                     F
if(user == 'pepe' || password == '123456' || facial == true){//&& => true
    console.log('Bienvenido a la app');
}else{
    console.log('No tienes acceso a la app')
}

console.log('======================================');




