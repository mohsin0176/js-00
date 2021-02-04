function Animal(name){
	this.name=name;
}
Animal.prototype.print=function(){
	console.log(this.name);
}

function myNew(constructor)
{
var obj={};

object.setPrototypeOf(obj,constructor.prototype);
var argsArray=Array.prototype.slice.apply(arguments);

constructor.apply(obj,argsArray.slice(1));

return obj;

}

var cat=myNew(Animal,'TWO','ANY');
 


