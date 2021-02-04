class Person
{

	constructor(name,email)
	{
		this.name=name;
		this.email=email;
	}
 
	set name(name)
	{
		this.name=name;
	}
	get name()
	{
		return this.name;
	}
	print()
	{
		console.log(`Name:${this.name},Email:${this.email}`);
	}
}

export default Person;