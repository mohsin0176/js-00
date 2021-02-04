let myFirstPromise=new Promise((resolve,reject)=>{
     
     let name='Twinkle Cats';
	     setTimeout(()=>{resolve(name)},3000);
	     
})

myFirstPromise.then((name)=>{console.log('We Are'+name);})