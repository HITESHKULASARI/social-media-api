import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './src/features/user/user.route.js';
import postRouter from './src/features/posts/posts.route.js';
import commentRouter from './src/features/comments/comments.route.js'
import likeRouter from './src/features/likes/likes.route.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';

const server = express();

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json());

server.use('/api/user',userRouter);
server.use('/api/posts',jwtAuth,postRouter);
server.use('/api/comments',jwtAuth,commentRouter);
server.use('/api/likes',jwtAuth,likeRouter);

server.get('/',(req,res)=>{
    res.status(200).send('now from here we will create');
})

server.listen(8000,(err)=>{
    if(err){
        res.status(400).send('error in server while running the code');
    }

    console.log('server is running on the port : 8000');
})
