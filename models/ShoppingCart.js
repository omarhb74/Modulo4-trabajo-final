const mongoose = require('mongoose');
const shoppingSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    products: [
        { 
            productId: {
                type:String,
                required: true,
            },
            quantity: {
                type:Number,
                required: true,
            },
            price:{
                type:Number,
                required: true,
            }
        }
    ]
});

const shoppingModel = mongoose.model("shopping",shoppingSchema);
module.exports = shoppingModel