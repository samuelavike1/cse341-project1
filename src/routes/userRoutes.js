const {getUser, getUsers} = require("../controllers/userController");
const userRouter = require("express").Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/:id',getUser );


module.exports = userRouter;