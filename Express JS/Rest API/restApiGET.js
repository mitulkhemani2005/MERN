const express = require('express')
const app = express()
const port = 8000
const data = require('./data.json')
app.get('/users',(req,res)=>{
    const name = data.map((user)=>{
        return (`Name: ${user.first_name}`)       
    })
    res.send(name)
})
app.get('/users/:id',(req,res)=>{
    const reqId = req.params.id;
    const sendData = data.find((user)=>{
        if (user.id===Number(reqId)){
            return user
        }
    })
    res.send(sendData)
})
app.listen(port,()=>{
    console.log('Server Started');
})