function call(){
	return function(name){
		return 'Caller Calling You'+name;
	}
}
var x=call();
var y=x('HM NAYEM');
console.log(y);