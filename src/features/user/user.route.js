
import express from 'express';
import userValidator from  '../../middlewares/user.validate.middleware.js';
import UserControler from "./user.controller.js";

const userRouter = express.Router();

userRouter.post('/sign-up',userValidator,UserControler.addUser);
userRouter.post('/log-in',UserControler.checkUser);


export default userRouter;