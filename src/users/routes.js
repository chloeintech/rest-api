const { Router } = require("express");
const userRouter = Router();

const {registerUser, getUsers, login} = require("./controllers");
const { hashPass, comparePass, tokenCheck } = require("../middleware");


userRouter.post("/users/register", hashPass, registerUser)
userRouter.get("/users/getallusers", tokenCheck, getUsers)

userRouter.post("/users/login", comparePass, login)

module.exports = userRouter