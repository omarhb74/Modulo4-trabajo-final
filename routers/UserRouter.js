const express = require('express');
const UserRouter = express.Router();
const {getAllUsers, addUser, getByUser,editUser,deleteUser} = require('../controllers/Users')

UserRouter
    .route("/")
    .get(getAllUsers)
    .post(addUser);

UserRouter
    .route("/:id")
    .get(getByUser)
    .put(editUser)
    .delete(deleteUser);

module.exports = UserRouter;