const mongoose=require("mongoose")
//connection creation,name of database db2
mongoose.connect("mongodb://localhost:27017/db2",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection successful . . . . . . . . . . . .. . . . . . . . . . . . . . "))
.catch((err)=>console.log(err))
//schema(work like table head)
//mongoose schema defines the structure of the document
//default values,validators,etc .,
const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true           //not be null
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
//mongoose model is a wrapper on the mongoos schema.
//a mongoos schema defines the structure of the document
//default value ,validators ,etc.where a mongoos model
//provides an interface to the database for creating
//quering,updating ,deleting records(CRUD operation)
//create collection
const playlist=new mongoose.model("playlist",playlistSchema)
//CRUD operation
//insert data(create a document)
const createDocument=async()=>{
    try{
                //insert multiple document
                const playlist1=new playlist({
                    name:"s",
                    ctype:"song",
                    videos:5,
                    author:"a1",
                    active:true
                })
                const playlist2=new playlist({
                    name:"sp2",
                    ctype:"song",
                    videos:5,
                    author:"a1",
                    active:true
                })
                const playlist3=new playlist({
                    name:"sp3",
                    ctype:"song",
                    videos:5,
                    author:"a1",
                    active:true
                })
                const result=await playlist.insertMany([playlist1,playlist2,playlist3])
                console.log(result)
        }catch(err){console.log(result)}                
}
// createDocument()			//creation,call the function

//read data
const getDocument=async()=>{
    //query 1,find the name where the videos count = 5
    const query1=await playlist
    .find({videos:5})
    .select({name:1,_id:0})
    console.log(query1)
    //query 2,find the name where the videos count >= 5
    const query2=await playlist
    .find({videos:{ $gte: 5 }})
    .select({name:1,_id:0})
    console.log(query2)
    //count
    const query3=await playlist
    .find()
    .countDocuments()
    console.log(query3) 

}
// getDocument()
// update operation //see




//delete
const deleteDocument=async(_id)=>{
    try{
        const result=await playlist.deleteOne({_id})
        console.log(result)
    }catch(err){
        console.log(err)
    }

}
// deleteDocument("60b32d6 b245c4f20f4413e5b")      //delete the value associated with this id




//validation





















