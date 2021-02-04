 function operation (a,b,callback){

 	var c=a+b;
 	var d=a-b;
 	callback(c,d);
 	 }

 function print(c,d)
 {
 	console.log('Addition',+(c,d));
 }
  function multiply(c,d)
 {
 	console.log('Multiply',+(c*d));
 }
operation(10,5,print);
operation(10,5,multiply);