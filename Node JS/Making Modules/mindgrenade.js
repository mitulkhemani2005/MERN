let num1 = 5;
let num2 = 10;
function addValues(){
    console.log(`The sum is ${num1+num2}`);
}
addValues()
//we are not exporting over here the function is executing
//try 
var try1 = (num) => {
    console.log(num**2);
}
module.exports = try1;