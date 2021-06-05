//10>customizing the views directory(change the name view)const path=require("path")
const express=require("express")
const app=express()
const path=require("path")

const spath=path.join(__dirname,'/staticF')         //static path
const Tpath=path.join(__dirname,'/template')         //template path
app.set("view engine","hbs")        //to set the view engine
app.set("views",Tpath)
app.use(express.static(spath))

app.get("/",(req,res)=>{
    res.render("index.hbs")
})
app.get("/a",(req,res)=>{                   //routing
    res.render("a.hbs")
})

app.listen(3000,()=>{
    console.log("server is on(Cviews) . . . .")
})