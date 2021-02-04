
var arr=[5,2,3,6,7,4,8];
var sum=0;
for(var i=0;i<arr.length;i++)
{
  sum=sum+arr[i];
  console.log('1st Sum =='+' '+sum);
}

console.log('--------------------');
console.log('--------------------');

var result=arr.reduce(function(a,b){
return a+b;
});

console.log(result);