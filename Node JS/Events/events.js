const event = require("events")
const newevent = new event()
newevent.on('event',(name)=>{
    console.log("Event Recieved"+name)
})
newevent.emit('event',"mitul")