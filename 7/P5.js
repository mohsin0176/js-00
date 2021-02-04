var book={
	name:'Functional Javascript',
	author:'Bibel',
	publisher:'John Huik',
	print:function(){
		console.log(this.name+'-----'+this.author);
	},
	page:20
}
console.log(book.name);
console.log(book.author);
console.log(book.publisher);
console.log(book.page);
book.print();
console.log('-----------------------------------');
console.log('-----------------------------------');
console.log('-----------------------------------');
console.log('-----------------------------------');
console.log('Book Name:'+book.name);
console.log('Book Name:'+book['name']);
book.year=2010;
book['price']=30;
console.log('Published Year:'+book.year);
console.log('Book Price:'+book.price);
console.log('-----------------------------------');
console.log('-----------------------------------');

for(var element in book)
{
	console.log(element);
	console.log(book.element);
	console.log('-----------------------------------');
	console.log('-----------------------------------');
	console.log(book[element]);
}