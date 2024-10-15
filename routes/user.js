import { Router } from "express";
import { registerUser, loginUser, logoutUser, updateProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";
//Create a router
const userRouter = Router();

userRouter.post('/users/todos', registerUser)

userRouter.post('/users/todos', loginUser)

userRouter.post('/users/todos', logoutUser)

userRouter.post('/users/me', userAvatarUpload.single('avatar'), updateProfile);

export default userRouter; 