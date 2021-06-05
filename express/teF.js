//template engine practice file
const path=require("path")
const express=require("express")
const app=express()

const spath=path.join(__dirname,'/staticF')
app.set("view engine","hbs")        //to set the view engine
app.get("/",(req,res)=>{
    res.render("index.hbs")
})

app.listen(3000,()=>{
    console.log("server is on(teF) . . . .")
})








//to add dynamic data in express we need template engines
//i>
//>npm i handlebars
//>npm i ejs
//>npm i pug
//>npm i hbs			//express.js view engine for handlebars.js
//ii>create a folder "views"(name of folder "views" would be constant)
//inside views create index.hbs