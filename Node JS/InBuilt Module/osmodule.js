const os = require('os');
//info
const cpuinfo = os.cpus()
// console.log(cpuinfo)
const userinfo = os.userInfo().username
console.log(userinfo)