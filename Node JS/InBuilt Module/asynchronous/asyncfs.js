console.log(`Start of Code`)
const fs = require('fs');
const readFile1 = fs.readFile('./folder1/file1.txt','utf8',(err,res) => {
    if (err){
        console.log("err");
        return;
    }
    console.log(res);
    let read1 = res;
    console.log('File 1 Read Completed');
    const readFile2 = fs.readFile('./folder2/file2.txt','utf8',(err,res) =>{
        if (err){
            console.log("err");
            return;
        }
        console.log(res);
        let read2 = res;
        console.log('File 2 Read Completed');
        fs.writeFile('./WriteFolder/Write.txt',`This File has been created\nData in file 1:[ ${read1} ]\nData in file 2:[ ${read2} ]\nWrite Completed`,'utf8',(err,res)=>{
            if (err){
                console.log('Write error');
                return;
            }
            console.log("Write Completed Successfully");
        })
    })
})
console.log(`End of COde`)