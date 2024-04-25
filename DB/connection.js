const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://gadha:gadhaug@cluster0.7plurii.mongodb.net/NirBlogApp?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
console.log(error)
})