const fs = require('fs')
const http = require('http')
const readFileSync = fs.readFileSync
const homePage = readFileSync('./index.html')
const aboutPage = readFileSync('./about.html')
const server = http.createServer((req,res)=>{
    const url = req.url
    if (url=='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if (url=='/about.html'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(aboutPage)
        res.end()
    }
    else {
        res.writeHead(404,{'content-type':'text/plain'})
        res.write('Error Not founf the Path')
        res.end()
    }
}).listen(5000)