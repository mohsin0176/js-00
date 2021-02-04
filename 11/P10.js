fetch('https://www.youtube.com/watch?v=GIMPIeb69w0')
.then((response)=>console.log(response.json()))
.then((body)=>{body.map(data=>console.log(data.name));})
.catch((err)=>console.log(err));