//serve static file
//here s represent static
const path=require("path")
const express=require("express")
const app=express()

const spath=path.join(__dirname,'/staticF')         //give us the absolute path
console.log(spath)
app.use(express.static(spath))


app.get("/",(req,res)=>{
    res.send("hello")
    console.log("server is on(ssf) . . . .")
})

app.listen(8000,()=>{
    console.log("server is on(ssf) . . . .")
})