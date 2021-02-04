function host(){
	console.log('I Am Host Function');
    function child(){
		console.log('I Am Child Function');
					}
					return child;

}

var a=host();
console.log(a());

console.log('-----------------------');

function host(){
	console.log('I Am Host Function');
    function child(){
		console.log('I Am Child Function');
					}
					return child;

}

var a=host();
 a();


console.log('-----------------------');
console.log('-----------------------');

function greeting(msg){
	return function(name){
		console.log(msg+'-'+name);
						 }
}

var good=greeting('Good Morning');
good('Twinkle Cats');

console.log('-----------------------');
console.log('-----------------------');

function greeting(msg){
 			function ret(name){
							  console.log(msg+'-'+name);
						      }
						      return ret;
}

var good=greeting('Good Morning');
good('Twinkle Cats');//pass 2nd parameter value.

console.log('-----------------------');
console.log('-----------------------');