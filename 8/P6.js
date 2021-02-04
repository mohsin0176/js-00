function Person(name,age){
	this.name=name;
	this.age=age;
	this.hello=function(){
		console.log('Name:'+this.name+'Age:'+this.age);
	}
}
var p1=new Person('HM NAYEM',30);
var p2=new Person('SD JAKIR',60);
console.log(p1);
console.log(p2);