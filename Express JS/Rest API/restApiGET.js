const app = require('express')();
const data = require('./data.json');
const dataName = data.map((Names)=>{
    return(Names.first_name)
})
app.get('/allusers',(req,res)=>{
    const html = `
    <ul>
        ${data.map((Names)=>{
            return(`<li>${Names.first_name}</li>`);
        }).join('')}
    </ul>`
    res.send(html);
})
app.get('/allusers/:idNumber',(req,res)=>{
    const idAsked = req.params.idNumber;
    const idNumber = Number(idAsked);
    const details = data.find((user)=>{
        if (user.id==idNumber){
            return user;
        }
    });
    res.send(details)
})
app.listen(5000,()=>{console.log('Server Refreshed')});