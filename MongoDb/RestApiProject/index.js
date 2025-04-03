const express = require('express');
const app = express();
const users = require('./data.json');
const fs = require('fs');
const mongoose = require('mongoose');
const { request } = require('http');
//middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json())
//connection
mongoose.connect('mongodb://localhost:27017/RestApiProject')
.then(()=>{console.log('Moo\ngose Connected')})
.catch((err)=>{console.log('Moongose not connected')})

//schema
const usersSchema = new mongoose.Schema({
        first_name:{
            type:String,
            required: true
        },
        last_name:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true,
            unique: true
        },
        gender:{
            type:String,
            required: true
        },
        ip_address:{
            type:String,
            required: true
        }}
)
//making model
const user = mongoose.model('user',usersSchema);
//GET METHOD
app.get('/users',(req,res)=>{
    res.json(users);
})
app.get('/api/users',(req,res)=>{
    // console.log(users.map((user)=>{return (user.first_name)}))
    const html = `<ul>
        ${users.map((user)=>{
            return(`<li>${user.first_name}</li>`)
        }).join('')}
    </ul>`;
    res.send(html);
})
app.get('/api/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find((user)=>{
        if (user.id==id){return user};
    });
    res.send(user);
})
//POST METHOD
app.post('/api/users',async (req,res)=>{
    const body = req.body;
    const NewUser = await user.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        ip_address:body.ip_address
    })
    console.log(NewUser);
    res.send('hi')
})

app.listen(5000,()=>{console.log('Server Started/Restarted')});