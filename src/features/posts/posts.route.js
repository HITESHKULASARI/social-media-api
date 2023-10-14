
import PostsController from "./posts.controller.js";
import express from 'express';

const postRouter = express.Router();


postRouter.get('/',PostsController.getAllPosts);
postRouter.post('/',PostsController.addPosts);

export default postRouter;

