const bio={
    name:"arnab",
    age:22,
    add:"kankata"
}

const bioInJson=JSON.stringify(bio)         //converting object into JSON(use method JSON.stringify(obj_name))

const fs=require("fs")
fs.writeFile("bioInJson1.json",bioInJson,(err)=>{})     //one file created as bioInJson1.json
fs.readFile("bioInJson1.json","utf8",(err,data)=>{
    const bioobj=JSON.parse(data)                       
    console.log(data)
    console.log(bioobj)
})