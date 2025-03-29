const file = require('fs');
const readFile = file.readFileSync
const writeFile = file.writeFileSync
// writeFile('./File/Data.txt','');
for (var i=1; i<=10000; i++){
    writeFile('./File/Data.txt',`The data is ${i}\n`, {flag: 'a'})
}