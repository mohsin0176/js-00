function add(num)
{
return this.value+num;	
}

var obj1=
{
value:60
}
var obj2=
{
value:30
}
var x=add.bind(obj2);
var y=x(140);
console.log(y);

