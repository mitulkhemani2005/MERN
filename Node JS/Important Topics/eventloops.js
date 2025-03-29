console.log('First');
setTimeout(() => {
    console.log('Second')
},10)
setImmediate(()=>{
    console.log('Between')
})
console.log('third');
setImmediate(()=>{
    console.log('Fourth')
})
console.log('end')