//Mapas : Estructuras mediante claves y un valor

let mapa = new Map();

mapa.set('nombre','Pikashu');
mapa.set('color','amarillo');
mapa.set('tipo','Electrico');

console.log(mapa);
console.log(mapa.get('nombre'));
console.log(mapa.has('color'));
mapa.delete('tipo');
console.log(mapa);

//Conjuntos : Lista de elementos que no son repetidos

let lenguajes = new Set();

lenguajes.add('Java');
lenguajes.add('C#');
lenguajes.add('PHP');
lenguajes.add('Go');

console.log(lenguajes);

// Ciclos For
lenguajes.forEach(
    (lenguaje) => console.log(lenguaje)
);

for(let lenguaje of lenguajes)
{
    console.log(lenguaje);
}