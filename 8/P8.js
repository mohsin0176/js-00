function print(){
	console.log('Name:'+this.name+'Age:'+this.age);
}
var obj1={
	name:'MOHSIN',
	age:22
}
var obj1={
	name:'NAYEEM',
	age:42
}

var x=print.bind(obj1);
x();

 