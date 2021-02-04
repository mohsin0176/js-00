 function add(a,b)
{
	return a+b;
}
console.log(add(10,20));
var addition=add;
console.log(addition(100,12));

var names=['HM Nayem','Shegufa Taranjum','Twinkle Cats','Abir Azim','Jubel Ahmed','Al Rafi'];

names.forEach(print);
function print(name)
{
console.log(name);
}
names.forEach(function print(name)
{
console.log(name);
}
);


function operation(a,b)
{
	var c=a+b;
	var d=a*b;
	console.log(c,d);

}
operation(10,5);
 