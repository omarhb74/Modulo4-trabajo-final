const express = require("express");
const morgan = require("morgan");
const ProductRouter = require('./routers/ProductRouter');
const UserRouter = require("./routers/UserRouter");
const app = express();

app.use(express.json());// req => body
app.use(morgan('dev'));

app.use("/api/v1/product/", ProductRouter);
app.use("/api/v1/user/", UserRouter);


module.exports = app;

