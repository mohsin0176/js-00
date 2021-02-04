const obj={
	name:'HM NAYEM',
	print:function(){
		setTimeout(()=>{console.log(this.name)},1000);
	}
}
obj.print();