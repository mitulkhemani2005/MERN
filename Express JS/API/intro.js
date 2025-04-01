const express = require('express');
const app = express();
const data = require('./data');
const data1 = data.arr1;
app.get('/',(req,res)=>{
    res.send(data1)
    res.send('<a href="./api">link</a>')
})
app.get('/api',(req,res)=>{
    const newProduct = data1.map((data1)=>{
        const {name} = data1;
        return {name};
    })
    res.send(newProduct)
})
app.get('/api/1',(req,res)=>{
    const detail = data1.find((data1)=>data1.name==='mitul');
    res.send(detail)
})
app.listen(5000,()=>{
    console.log(`App Started`)
})