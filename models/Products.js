const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique: true
    },
    price:{
        type:Number,
        require:true
    },
    inventory:{
        type:Number,
        require:true,
        default: 0
    },
    unit:{
        type:String,
        require:true,
    },
});

const productModel = mongoose.model("products",productSchema);
module.exports = productModel