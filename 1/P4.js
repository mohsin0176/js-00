function operation(a,b,callback)
{
var c=a+b;
var d=a-b;

callback(c,d);
}
function add(c,d)
{
	console.log(c+d);
}
function sub(c,d)
{
	console.log(c-d);
}
function multiply(c,d)
{
	console.log(c*d);
}
function div(c,d)
{
	console.log(c/d);
}

operation(10,5,add);
operation(10,5,sub);
operation(10,5,multiply);
operation(10,5,div);