print('MY NAME IS KHAN-KING',print1,print2);
function print1(data){
	var data=data.toUpperCase();
	console.log(data);
	console.log('Length:'+data.length);
}
function print2(data){
	var data=data.toLowerCase();
	console.log(data);
	console.log('Length:'+data.length);
}
function print(data,callback1,callback2)
{
	console.log('Original Data:'+data);
	callback1(data);
	callback2(data);
}