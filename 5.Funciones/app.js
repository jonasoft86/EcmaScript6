//Funciones con parametros
function calcular(total = 1000, igv=0.18)
{
    console.log(total,igv);
}

calcular();
calcular(5000);

//Funciones con parametros agrupados
function MostrarCursos(...cursos)
{
    console.log(cursos);
}

MostrarCursos('C#','Go','Java',2000);

//Funciones con Párametro Spread
function ComprarCurso(nombre,precio,cantidad)
{
    console.log(nombre,precio,cantidad);
}

var curso = ['java',400,5];

ComprarCurso(...curso);

//Funciones Arrow
var sumar = (x,y)=>x+y;

console.log(sumar(10,20));