var person={
	name:'HM Nayem',
	age:22,
	skill:['PHP','C++','JAVA'],
	print:function(){
		console.log(this.name,this.age,this.skill);
	}
}

person.name='MD.MOHSIN';
person.print();