var names=['HM Nayem','Shegufa Taranjum','Twinkle Cats','Abir Azim','Jubel Ahmed','Al Rafi'];
function traverse(names,callback)
{
	for (i=0;i<names.length;i++)
	{
		callback(names[i]);
	}
}

traverse(names,function(name)
{
	console.log(name.toUpperCase());
}
);