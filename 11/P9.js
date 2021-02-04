fetch('https://www.youtube.com/watch?v=GIMPIeb69w0')
.then((response)=>console.log(response.json()))
.then((body)=>{console.log(body)})
.catch((err)=>console.log(err));