const express = require('express');
const ShoppingRouter = express.Router();
const {addShopping, getShoppingByUser} = require('../controllers/Shopping');
const { login, signup, protect } = require("../controllers/Auth");

ShoppingRouter
    .route("/")
    // .all(protect)
    .post(addShopping);

ShoppingRouter
    .route("/:user")
    // .all(protect)
    .get(getShoppingByUser)
    // .put(editProduct)
    // .delete(deleteProduct);
ShoppingRouter
    .route("/:id")
    .all(protect)
    .post(payShoppingcart)

module.exports = ShoppingRouter;
