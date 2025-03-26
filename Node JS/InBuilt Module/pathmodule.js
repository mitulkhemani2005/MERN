const path = require("path");
// console.log(path.sep)
const fdir = path.join('.\Day 1',"Inbuilt","pathmodule.txt");
// console.log(fdir)
const basename = path.basename(fdir)
// console.log(basename)
const absolute = path.resolve(__dirname,'MakingUsingPathModules','Hi.txt');
console.log(absolute)