const func = new Promise((resolve,reject) => {
    const a = 12;
    if (a==2){
        resolve('True'); //this will pass a message to => .then() callback function
    }
    else{
        reject('False') //this message will be send to  .catch callback function for rejection
    }
})
func.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})