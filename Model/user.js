const mongoose =require('mongoose');
const userSchema =mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    Role:{
        type:String,
        default:"user"
    }
})

const userModel =mongoose.model('user',userSchema);
module.exports=userModel;