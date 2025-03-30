const http = require('http')
const server = http.createServer((req,res)=>{
    const url1 = req.url
    if (url1 == '/') {
        console.log('home')
        res.writeHead(200,{ 'console-type':'text/html'})
        res.write('Home Page')    
    }
    else if (url1 =='/about'){
        console.log('about')
        res.writeHead(200,{ 'console-type':'text/html'})
        res.write('About Page')
    }
    else{
        console.log('error')
        res.writeHead(404,{ 'console-type':'text/html'})
        res.write('Error Page')
    }
    res.end()
})
server.listen(5000)