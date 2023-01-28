const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true
    },
    ci:{
        type:Number,
        require:true,
    },
    age:{
        type:Number,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
});

const userModel = mongoose.model("users",userSchema);
module.exports = userModel