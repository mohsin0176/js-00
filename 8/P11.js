function add(a,b)
{
return (a+b)*(this.c);
}
var obj2
{
	c:3
}


var z=add.apply(obj2,[10,4]);