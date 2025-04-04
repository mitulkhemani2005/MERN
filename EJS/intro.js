const express = require('express')
const app = express()
const path = require('path')

//use ejs as middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index',{trust: 'yes'})
})
app.listen(5000,()=>{console.log('Server Started')})