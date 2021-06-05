//it replace the code that are use many time
//reuse of code
const express=require("express")
const app=express()
const hbs=require("hbs")
const path=require("path")

const spath=path.join(__dirname,'/staticF')         //static path
const Tpath=path.join(__dirname,'/template')         //template path
const Ppath=path.join(__dirname,'/template/partials')   //here it read the file /template/partials/header.hbs

app.set("view engine","hbs")
app.set("views",Tpath)
hbs.registerPartials(Ppath)
app.use(express.static(spath))

app.get("/",(req,res)=>{
    res.render("index.hbs")
})
app.get("/a",(req,res)=>{
    res.render("a.hbs")
})
app.get("*",(req,res)=>{
    // res.render("a.hbs")
    res.render("404P",{
        error1:"oops page not found arnab . . ."
    })
})


app.listen(3000,()=>{
    console.log("server is on(err) . . . .")
})