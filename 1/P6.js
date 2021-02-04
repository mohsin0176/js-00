var G=20;

function operation(G,callback)
{

if (G>10)
{

var a='Result Is True';
callback(a);
}
else
{
var a='Result Is False';
callback(a);
}

}

function print(a)

{
    console.log(a);
}


operation(G,print);
