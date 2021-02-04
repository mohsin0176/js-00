const obj={
	name:'HM NAYEM',
	email:'msnju2010@gmail.com'
}

let {name,email}=obj;

function print({name,email})
{
console.log(`Hello${name};Email:${email}`);
}

print({name,email});