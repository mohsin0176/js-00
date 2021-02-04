function Person(name,age){
	this.name=name;
	this.age=age;
}

Person.prototype.hello=function()
{
	console.log('Hello,'+this.name);
}
Person.prototype.print=function()
{
	console.log('Hi,'+this.age);
}
Person.prototype.email='msnju2010@gmail.com';
var p1=new Person('HM NAYEM',30);
var p2=new Person('SAYEED ANWAR',40);

console.log(p1);
console.log(p2);
console.log(Person.prototype);
 