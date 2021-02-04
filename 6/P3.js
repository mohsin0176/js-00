var people=[
			{name:'HM NAYEM',age:36},
			{name:'ABUL',age:25},
			{name:'BABUL',age:63},
			{name:'KAYES',age:12},
			{name:'IMRUL',age:45}
           ]

people.sort(function(a,b)
	{
		if (a.name >b.name) {return 1;}
		else if (a.name <b.name) {return -1;}
		else{ return 0;}
	});
console.log(people);
console.log('--------------');
console.log('--------------');
var people=[
			{name:'HM NAYEM',age:36},
			{name:'ABUL',age:25},
			{name:'BABUL',age:63},
			{name:'KAYES',age:12},
			{name:'IMRUL',age:45}
           ]

people.sort(function(a,b)
	{
		if (a.name <b.name) {return 1;}
		else if (a.name >b.name) {return -1;}
		else{ return 0;}
	});
console.log(people);

console.log('--------------');
console.log('--------------');

