const mongoose = require('mongoose');
const app = require('./app');



// MONGOOSE CONNECTION
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL, {}).then(async (con) => {
    console.log("connected to mongo");

}).catch((err) => {
    console.log(err);
});





const server = app.listen(process.env.PORT, () => console.log(`App running on port${process.env.PORT}`));