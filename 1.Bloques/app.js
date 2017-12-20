function EjemploVar()
{
    var x = 100;
    if(true){
        var x = 50;
        console.log(x);//50
    }
    console.log(x);//50
}

function EjemploLet()
{
    let x = 100;
    if(true){
        let x = 50;
        console.log(x);//50
    }
    console.log(x);//50
}

EjemploVar();
EjemploLet();