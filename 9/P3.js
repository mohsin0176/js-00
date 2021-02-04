function Animal(name){
	this.name=name;
}
Animal.prototype.print=function(){
	console.log(this.name);
}
var cat=new Animal('MAN');
var dog=new Animal('WOMAN');

cat.print();