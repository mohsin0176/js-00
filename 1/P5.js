var names=['HM NAYEM','HM KHAIR','JAKIR','SAYED','JALIL','SALIL'];

function operation(names,callback)
{

for(var i=0;i<=names.length;i++){callback(names[i]);}

}

function add(name)

{
	console.log(name);
}


operation(names,add);
