const http=require("http")

const server=http.createServer((req,res)=>{
    if (req.url=="/"){res.end("at home")}
    if (req.url=="/a"){res.end("at a")}
    if (req.url=="/b"){res.end("at b")}
    if (req.url=="/c"){res.end("at c")}
    else {
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>not found arnab</h1>")}
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("your server is listening . . .")
})