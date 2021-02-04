function Person(name,email,phone){
	this.name=name;
	this.email=email;
	this.phone=phone;
}
var p1=new Person('HM NAYEM','msnju2010@gmail.com','01760389641');
var p2=new Person('MOHSIN','hasanju2010@gmail.com','01940181252');
var p3=new Person('MAYEEN','sussaanju2010@gmail.com','01552644487');

var people=[p1,p2,p3];
people.forEach(function(person){
	console.log('Email :'+ person.email);
});
console.log('---------------------');
console.log('---------------------');

people.forEach(function(person){
	console.log('Name :'+ person.name);
});
console.log('---------------------');
console.log('---------------------');
people.forEach(function(person){
	console.log('Phone :'+ person.phone);
});