const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    var data = fs.createReadStream('./File/Data.txt');
    data.on('open', ()=>{
        data.pipe(res)
    })
})
server.listen(5000)