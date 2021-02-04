function book(name,author,price){
	this.name=name;
	this.author=author;
	this.price=price;
}

var p1=new book('Functional JavaScript','Michael Cook',30);
console.log(p1.constructor);