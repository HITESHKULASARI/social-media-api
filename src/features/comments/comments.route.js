import express from "express";
import CommentsController from "./comments.controller.js";

const router = express.Router();

const commentsController = new CommentsController();

router.post('/',commentsController.addComment);

export default router;
