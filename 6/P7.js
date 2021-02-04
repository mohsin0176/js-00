var arr=[1,2,3,4,5,6];

loop(arr,print);

function print(element,i)
{
console.log('Element Is:'+element+'  '+'Index Is:'+i);
}

function loop(arr,callback){
	for (var i = 0;i<arr.length;i++)
	{
		 print(arr[i],i);
	}

}