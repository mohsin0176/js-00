
function Person()
{
this.name="HM NAYEEM";
}

function Teacher()
{
Person.call(this);
this.subject="JavaScript";
}
var x=new Teacher();
var y=x.name;
var z=x.subject;
console.log(y+' AND '+z);
