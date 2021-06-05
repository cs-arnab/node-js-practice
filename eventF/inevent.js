//create an event emitter instance and register a couple of callback
//registering for the event with callback parameter

console.log("---------------------------------------------------")
//registering for the event to be fired only one time using once.
const EventEmitter=require("events")
const event=new EventEmitter()
console.log("---------------------------------------------------")
//we can call multiple events
event.on("sayMyName",()=>{ console.log("my name is a") })
event.on("sayMyName",()=>{ console.log("my name is b") })
event.on("sayMyName",()=>{ console.log("my name is c") })
event.emit("sayMyName")
console.log("---------------------------------------------------")
event.on("cp",(sc,msg)=>{
    console.log(`sc= ${sc} \nmsg= ${msg}`)      //use ``->(backticks) not ''->cotations
})
event.emit("cp",200,"ok")


console.log("---------------------------------------------------")

