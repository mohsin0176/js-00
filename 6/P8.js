var arr=[5,9,2,6,7,1,8];
var newArr=[];

for (var i = 0;i<arr.length; i++) 
{
	newArr.push(arr[i]);
}
newArr.sort();
console.log('New Array Is:'+newArr);

console.log('--------------');
console.log('--------------');
 
var newArr=arr.filter(function(value){ return value;});
console.log('New Array is :'+newArr);