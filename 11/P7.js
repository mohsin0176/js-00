fetch('https://www.youtube.com/watch?v=GIMPIeb69w0')
.then((response)=>{console.log(response.json());})
.catch((err)=>{console.log(err)});
 