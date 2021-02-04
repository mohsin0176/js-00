function print(){
	console.log('Name:'+this.name);
}
var obj1={
	name:'MOHSIN',
	age:20
}

var x=print.bind(obj1);
x();
console.log('----------------');
print.call(obj1);
console.log('----------------');

