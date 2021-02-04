var arr=[54,56,17,58,21,12,45,24,51];
var newArr=[];
var jor=[];
var bijor=[];
loop(arr,print);
function print(newArr){
	console.log(newArr);
   
	

	for(var i=0;i<newArr.length;i++)
	{
        if (newArr[i]%2==0) 
        { 
        jor.push(newArr[i]);
        console.log(jor);
    	}
        else 
        { 
        bijor.push(newArr[i]);
         console.log(bijor);
    	}
    	

	}
	
}
function loop(arr,callback)
{
	for(var i=0;i<arr.length;i++)
	{
        newArr.push(arr[i]);
	}
	newArr.sort();
	callback(newArr);
}