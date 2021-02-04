var arr = [10,25,35,10, 44, 12, 4];

function myMap(arr,callback)
	{
	var newArr=[];
	for(var i=0;i<arr.length;i++)
	{
    newArr.push(callback(arr[i]));
	}
	return newArr;
	}
	
	function print(value)
	{
		return value *(5-2*3);
	}



	var arr=myMap(arr,print);
    
    console.log('My New Array Is:'+arr);
 