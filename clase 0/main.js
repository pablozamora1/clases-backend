// tipo de datos en js

// 1) tipo primitivo.

//1.1) tipo number

//int 23567
// float 123.23

// 1.2) tipo string

// "esto es un strig"
// 'esto tambien es un string'

// los string son cadenas de texto . Se pueden escribir con comillas simples o dobles

// 1.3 tipo boolean

true;
false;

// 1.4 undefined

// se le asigna a una varieble cuando no se le asigna ningun valor

// 1.5 null

// es la ausencia intencional de un valor

// VARIABLES
// es un espacio de memoria que almacena informacion importante para la apicacion , y como su nombre lo indica puede modificarde en el tiempo

// declarar una variable

let alumno = "pablo";

console.log(alumno);
console.log(typeof alumno);

const nacimiento = 1989;

console.log(nacimiento);

//expreciones booleanas
let ejemploA = 10 > 5;
console.log(ejemploA);

//2) TIPO OBJETOS

// 2.1) array:

let array1 = [1, "tinki winki", null, [1, 2, 3]];

//array : es una coleccion de datos. puede ser de cualquier tipo y son dinamicos

console.log(array1[3]);

// 2.2) objetos:

const empleado = {
  nombre: "pepe",
  apellido: "argento",
  trabajo: "vendedor",
  edad: 50,
};

console.log(empleado);

// condicionales
//IF:
// EL condicional IF nos permite ejecutar un bloque de codigo si se cumple la funcion

let edad = 8;

if (edad >= 18) {
  console.log("podes entrar al bar");
} else {
  console.log("no podes entrar");
}

// ciclos / bucles
//Ciclo FOR:

//Sintaxis

for (let i = 0; i < 10; i++) {
  console.log([i]);
}

// while:
// el while ("mientras") nos permite ejecutar un bloque de codigo mientras se cumpla una condicion

// let nombreCliente = prompt("ingrese su nombre: (para salir 'salir')");

// while (nombreCliente !== "salir") {
//   console.log("hola " + nombreCliente);

//   nombreCliente = prompt("ingrese su nombre: (para salir 'salir')");
// }
