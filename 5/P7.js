function hello(name){
	print(name);
}
function print(args)
{
	console.log(args);
}
hello('MOHSIN');

console.log('----------------------------');
function hello(name){
	print(name);
	print('Something Else');
}
function print(args)
{
	console.log(args);
}
hello('MOHSIN');

console.log('----------------------------');
var a=['HSIN','NURU','LURU','KURU'];
a.forEach(print);

function hello(name,callback){

print(name);

}
function print(name){
console.log(name);
}

hello('MOHSIN',print);