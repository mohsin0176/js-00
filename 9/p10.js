var obj={
	name:'Twinkle Cats',
	print:function(){
		console.log('Hello,'+this.name);
		function another()
		{
			console.log(this);
		}
		another();
	}
}

var person={
	name:'HM NAYEM'
}
person.print=obj.print;
person.print();