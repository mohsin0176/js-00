 var person={
 	name:'MOHSIN',
 	print:function(){
 		setTimeout(function(){
        console.log(this);
        console.log('Hello:'+this.name);
 		}.bind(this),2000);
 	}
 }