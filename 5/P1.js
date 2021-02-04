function outer(){
	function inner(){
    console.log('I am Inner Function');
	}
	inner();
	console.log('I am Outer Function');
}
outer();