const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("at home")
})
app.get("/a",(req,res)=>{
res.send("at a")
})

app.listen(8000,()=>{
    console.log("server is on(app) . . . .")
})




