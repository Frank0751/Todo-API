import { Router } from "express";
import { register, login, logout } from "../controllers/user.js";

//Create a router
const userRouter = Router();

userRouter.post('/users/todos', register)

userRouter.post('/users/todos', login) 

userRouter.post('/users/todos', logout)

export default userRouter; 