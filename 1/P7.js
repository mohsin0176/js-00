
var G=45;
function result(G,callback)
{
switch(G) {
  case 45:
  var a='You Have Gotten D';
  break;
  case 55:
  var a='You Have Gotten C';
  break;
  case 65:
  var a='You Have Gotten B';
  break;
  case 75:
  var a='You Have Gotten A';
  break;
  default:
  var a='You Have Gotten A+';
} 
callback(a);
}
function print(a)
{
console.log(a);
}
result(G,print);