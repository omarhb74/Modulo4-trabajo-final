const express = require('express');
const ShoppingRouter = express.Router();
const {addShopping} = require('../controllers/Shopping');
const { login, signup, protect } = require("../controllers/Auth");

ShoppingRouter
    .route("/")
    // .all(protect)
    .post(addShopping);

ShoppingRouter
    .route("/:id")
    // .all(protect)
    // .get(getByProduct)
    // .put(editProduct)
    // .delete(deleteProduct);

module.exports = ShoppingRouter;