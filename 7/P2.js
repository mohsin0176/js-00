var arr = [65, 44, 12, 4];
var newArray = arr.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newArray);
console.log('-------');
var arr = [65, 44, 12, 4];
var nArray = arr.map(function(value){
	return value+20;
});

 

console.log(nArray);