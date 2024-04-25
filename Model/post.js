const mongoose=require('mongoose');
const postSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    }, 
    post:{
        type:String,
        require:true
    }, 
    image:{
        type:String,
        require:true
    }, 
    createAt:{
        type:Date,
        default:new Date()
    }

    
})

const postModel=mongoose.model('post',postSchema);
module.exports=postModel;