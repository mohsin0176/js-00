function sum(...num)
{
	return num.reduce((a,b)=>a+b);
}

let xum=sum(10,20,30,40,50);
console.log(xum);

var arr=[1,2.3,4];
var value=[...arr,10,20,30];
console.log(arr);
console.log(...arr);
console.log(value);