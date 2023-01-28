const express = require('express');
const ProductRouter = express.Router();
const {getAllProducts, addProduct, getByProduct,editProduct,deleteProduct} = require('../controllers/Products');
const { login, signup, protect } = require("../controllers/Auth");

ProductRouter
    .route("/")
    .all(protect)
    .get(getAllProducts)
    .post(addProduct);

ProductRouter
    .route("/:id")
    .all(protect)
    .get(getByProduct)
    .put(editProduct)
    .delete(deleteProduct);

module.exports = ProductRouter;