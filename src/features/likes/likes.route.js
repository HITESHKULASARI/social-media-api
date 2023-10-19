
import express from 'express';
import LikesController from './likes.controller.js';

const likeRouter = express.Router();

const likesController = new LikesController();

likeRouter.post('/add-likes',likesController.addLikes);
likeRouter.post('/get-likes',likesController.getLikes);

export default likeRouter;

