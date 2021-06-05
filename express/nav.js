//routing
const express=require("express")
const app=express()


app.get("/",(req,res)=>{
    res.write("<h1>at a</h1>")
    res.status(200).write("<h1>at b</h1>")
    res.send()

})
app.get("/a",(req,res)=>{
        res.send([
                {
                    name:"a",
                    age:10
                },
                {
                    name:"a",
                    age:10
                },
                {
                    name:"a",
                    age:10
                }
        ])
        })
app.listen(8000,()=>{
    console.log("server is on(nav) . . . .")
})
