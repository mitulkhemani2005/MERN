const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.json([{name:'mitul'},{name:'jairaj'}])
})
app.listen(5000,()=>{
    console.log(`App Started`)
})