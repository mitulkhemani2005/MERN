const http = require('http')
const server = http.createServer((req,res) => {
    console.log(req);
    if (req.url === '/'){
        res.write('welcome')
    }
    else if (req.url === '/about'){
        res.write('hi about')
    }
    else{
        res.write(`<h1>Oops</h1>
        <p>Page Not Found Error: 404</p>
        <a href="/localhost:5000">Home Page</a>`)
    }
    res.end()
})
server.listen(5000)