const express = require("express");
const morgan = require("morgan");
const ProductRouter = require('./routers/ProductRouter');
const UserRouter = require("./routers/UserRouter");
const authRouter = require("./routers/authRouter");
const app = express();

app.use(express.json());// req => body
app.use(morgan('dev'));

app.use("/api/v1/product/", ProductRouter);
app.use("/api/v1/user/", UserRouter);
app.use("/api/v1/auth/", authRouter);

app.all("*", (req, res, next) => {
    throw new Error('route not found');
});


module.exports = app;

