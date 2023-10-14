
import express from 'express';

import UserControler from "./user.controller.js";

const userRouter = express.Router();

userRouter.post('/sign-up',UserControler.addUser);
userRouter.post('/log-in',UserControler.checkUser);


export default userRouter;