const event = require("events")
const newevent = new event()
newevent.on('event',(name)=>{
    console.log("Event Recieved "+name)
})
newevent.emit('event',"mitul")
newevent.on('event',(name)=>{
    console.log("Checking if this Response will work or not")
})
newevent.emit('event',"mitul") //both event listner responded
