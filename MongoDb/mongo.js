const express = require('express')
const app = express()
//Importing and Using Database
const mongo = require('mongoose')
mongo.connect(`mongodb://localhost:27017/Learning-MongoDB`)
.then(()=>{console.log('MongodB Connected Succesful')})
.catch(()=>{console.log('MongodB Not Connected')})
//making schema
const mongoSchema = new mongo.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})
//making model
const mongoModel = mongo.model('AllUserDetails',mongoSchema)
//imporing middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
//post calling
app.post('/newUser',async (req,res)=>{
    const body = req.body;
    console.log(body)
    try{
            const newUser = await mongoModel.create({
            name:body.name,
            age:body.age,
            email:body.email
        })
        console.log(newUser)
        res.status(201).json(`User Added`);
    }
    catch (err){
        res.status(404).send('Aldready added User')
    }
})
app.listen(5000,()=>{
    console.log(`Server Started`)
})