const express = require('express');
const ProductRouter = express.Router();
const {getAllProducts, addProduct, getByProduct,editProduct,deleteProduct} = require('../controllers/Products')

ProductRouter
    .route("/")
    .get(getAllProducts)
    .post(addProduct);

ProductRouter
    .route("/:id")
    .get(getByProduct)
    .put(editProduct)
    .delete(deleteProduct);

module.exports = ProductRouter;