const http=require("http")
const fs=require("fs")

const data=fs.readFileSync('userapi.json',"utf8")
const objData=JSON.parse(data)

const server=http.createServer((req,res)=>{
    if (req.url=="/"){res.end("at home")}
    if (req.url=="/apicall"){
        res.writeHead(200,{"content-type":"application/json"})
        res.write(objData[2].name)
        res.end("\n"+objData[0].name)
    }    
    else {
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>not found arnab</h1>")}
})


server.listen(3000,"127.0.0.1",()=>{
    console.log("your server is listening . . .")
})