import Person from './P1.js'

class Student extends Person
{
constructor(name,email,id)
{
super(name,email );
this.id=id;
}
print()
{
	super.print();
	console.log(`ID:${this.id}`);
}

}

export default Student;