//we are warking with query string
//URL parameters are pieces of information located in the query string of a URL.
//the query string is the portion of the URL that follows a question mark
//ex: domain.com / shows ? type=sneakers & short=price_ascending
const express=require("express")
const app=express()
const hbs=require("hbs")
const path=require("path")

const spath=path.join(__dirname,'/staticF')         //static path
const Tpath=path.join(__dirname,'../CvF/template')         //template path
const Ppath=path.join(__dirname,'..CvD/template/partials')   //here it read the file /template/partials/header.hbs

app.set("view engine","hbs")
app.set("views",Tpath)
hbs.registerPartials(Ppath)
app.use(express.static(spath))


app.get("/",(req,res)=>{
    res.render("inqs_F",{
        name:req.query.name
    })
})




app.listen(3000,()=>{
    console.log("server is on(inqs) . . . .")
})