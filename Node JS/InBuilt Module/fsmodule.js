    // //synchronous
    const fs = require("fs");
    readfile = fs.readFileSync;
    var cont = fs.readFileSync('./content/subfolder/file.txt','utf8')
    console.log(cont)
    fs.writeFileSync('./content/subfolder/file.txt',"hi\nMy name is Jairaj Khemani",'utf8')
    cont = fs.readFileSync('./content/subfolder/file.txt','utf8')
    console.log(cont)

    // // asynchronous
    let content;
    var asyncread = fs.readFile('./content/file.txt','utf8',(err,res)=>{
        if (err){
            console.log('error');
            return;
        }
        content = res;
        console.log(content)
    });
    // console.log(content);
    fs.writeFile('./content/file.txt',"My name is Jairaj1 Khemani",'utf8',(err,res) => {
        if (err){
            console.log('error');
        }
        console.log(res)
    })
    // console.log(content);