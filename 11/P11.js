fetch('https://www.youtube.com/watch?v=GIMPIeb69w0')
.then((response)=>console.log(response.json()))
.then((body)=>{
	const lis=body.map(data=>{
      let li=document.createElement('li');
      let text=`Name:${data.name},Email:${data.email}`
      let text=document.createTextNode(text);

      li.appendChild(textNode);
      return li;
	});

	console.log(lis);
})
.catch((err)=>console.log(err));