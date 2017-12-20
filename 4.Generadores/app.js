
function* MiGenerador()
{
    var index = 0;

    while(index<3)
    {
        yield index++;
    }
}

let gen = MiGenerador();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());