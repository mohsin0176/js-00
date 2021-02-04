function P1(a,b) 
{
	this.a=a;
	this.b=b;
}

function obj2(a,b,c)

{
	P1.call(this,a,b);
	this.c=c;
}

function obj3()
{
	obj2.call(this,10,15,20);
}

obj2.prototype=object.create(P1.prototype);
obj3.prototype=object.create(obj2.prototype);

var obj1=new obj(1,2);
var obj2=new obj2(4,5,6);
var obj3=new obj3();
 