const express = require('express');
const UserRouter = express.Router();
const {getAllUsers, addUser, getByUser,editUser,deleteUser} = require('../controllers/Users');
const { login, signup, protect } = require("../controllers/Auth");

UserRouter
    .route("/")
    .all(protect)
    .get(getAllUsers)
    .post(addUser);

UserRouter
    .route("/:id")
    .all(protect)
    .get(getByUser)
    .put(editUser)
    .delete(deleteUser);

module.exports = UserRouter;