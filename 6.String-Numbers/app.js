//Novedades String
let mensaje = "!Hola mundo!";

//Repetir
console.log(mensaje.repeat(3));
//Buscar adelante
console.log(mensaje.startsWith('ola',2));
//Buscar atras
console.log(mensaje.endsWith('ola',5));
//Buscar si existe
console.log(mensaje.includes('mundo'));

//Novedades Number
console.log(Number.isNaN(50));//false
console.log(Number.isNaN(0/0));//true
console.log(Number.isFinite(123));//true
console.log(Number.isInteger(123)); //true
console.log(Number.EPSILON);

//valor entero
console.log(Math.trunc(3.1416)); 
