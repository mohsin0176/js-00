let myFirstPromise=new Promise((resolve,reject)=>{
     
     let name='Twinkle Cats';
	     resolve(name);
	     
})

myFirstPromise.then((name)=>{console.log('We Are'+name);})