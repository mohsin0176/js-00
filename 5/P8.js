var me={
	name:'MOHSIN',
	age:16,
	email:'msnju2010@gmail.com'
}

print(me,mail);

function print(me,callback){
  
console.log('Person:'+me.name+'Age:'+me.age+'Email:'+me.email);

if (me.age>=12) { callback(me.email);}
else{console.log('You Are Too Litle');}

}
function mail(email){
	console.log('Your Mail Sent To:'+email);
}