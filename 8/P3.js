 var obj={
 	name:'Twinkle Cats',
 	print:function(){
 		console.log(this.name);
 	}

 }

 function myfunction(){
 	function inner(){
 		console.log(this);
 	}
 	 
 	new inner();
 }
myfunction();
obj.print();
var x=obj.print;
console.log(x);