
A();
function A()
{
var a=30;
B();
function B()
{
var b=20;
C(a,b);	
}

}

function C(a,b)
{
	console.log(a,b);
}