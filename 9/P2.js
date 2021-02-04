function Person(name)
{
	this.name=name;
}
Person.prototype.print=function()
{
	console.log('Name:'+this.name);
}
Person.prototype.another=function()
{
	console.log('This is an another Function');
}

Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
//Object.setPrototypeOf(Student.prototype,Person.prototype);
function Student(name,id)
{
	Person.call(this,name);
	this.id=id;
}
var x=new Student('MOHSIN',1660);

Person.prototype.printName=function()
{
	console.log(this.name+'Not Copied');
}
x.printName();
