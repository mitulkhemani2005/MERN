const stream = require('fs');
const ReadChunk = stream.createReadStream('./File/Data.txt')
ReadChunk.on('data',(data)=>{
    console.log(data);// this gives buffer output
    console.log('\n\n');
    console.log(data.toString())
})
