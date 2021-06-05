const fs=require("fs");
const http=require("http");
const server=http.createServer()
server.on("request",(req,res)=>{

   const rstream=fs.createReadStream("f1.txt")
   rstream.pipe(res)
   
})
server.listen(3000,"127.0.0.1",()=>{
    console.log("your server is listening . . . in streaming")
})