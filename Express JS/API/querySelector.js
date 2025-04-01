const app = require('express')()
app.get('/api/query',(req,res)=>{
    console.log(req.query);
    res.send('hi').status(200)
    
}).listen(5000,()=>{})