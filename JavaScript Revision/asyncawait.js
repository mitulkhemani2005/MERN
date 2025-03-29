function safety (res){
    return new Promise ((correct, reject)=>{
        if (res == 'Indian Brand'){
            correct(`Life is safe, Full life saving features`)
        } else{
            reject('Life harming chances Life on High Risk, 0 Safety Features')
        }
    })
}
function carbrand (name){
    return new Promise((correct,reject)=>{
        if (name=='Tata'){
            correct('Indian Brand')
        } else {
            reject('Foreign Brand')
        }
        
    })
}

var car = 'Ta1ta'
carbrand(car).then((msg)=>{
    console.log(msg);
    return safety(car).then((msg)=>{
        console.log(msg)
    }).catch((msg)=>{
        console.log('Error Found')
    })
}).catch((msg)=>{
    console.log(msg)
})

//async await function to implement the above code
//only for true response not for rejection
async function func () {
    const msg1 = await carbrand(car);
    console.log(msg1)
    if (msg1=='Indian Brand') {
        const msg2 = await safety(car);
        console.log(msg2)
    }
}

//code for checking the rejection
async function func() {
    try {
        var msg1 = await carbrand(car);
        console.log(msg1)
    } catch(err){
        console.log(err)
    } try{
        var msg2 = await safety(msg1);
        console.log(msg2)
    } catch (err) {
        console.log(err)
    }
}
func()