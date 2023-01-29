const Shopping = require("../models/ShoppingCart");

const addShopping = async (req,res) => {
    let newShopping = new Shopping();
    newShopping.invoiceNumber = req.body.invoiceNumber;
    newShopping.status = req.body.status;
    newShopping.totalAmount = req.body.totalAmount;
    newShopping.user = req.body.user;
    newShopping.products = req.body.products;
    newShopping = await newShopping.save();
    console.log(newShopping)
    res.status(200).json({
        status: 'ok',
        dataInserted: newShopping
    })
};



module.exports = {
    addShopping
}