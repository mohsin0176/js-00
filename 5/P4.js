function example()
{
	return {
		name:'mohsin',
		skill:['JAVA','PHP','C++'],
		print:function(){
			console.log(this.name,this.skill);
						}
	}
}

 
example().print();
print();//not executeable