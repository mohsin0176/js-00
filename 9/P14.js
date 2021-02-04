const obj={
	name:'HM NAYEM',
	print:function(){
		setTimeout(function(){console.log(this)}.bind(this),1000);
	}
}
obj.print();