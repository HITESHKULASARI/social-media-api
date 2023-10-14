
import PostsModel from "./posts.model.js";

const postModel = new PostsModel();

export default class PostsController{

    static getAllPosts(req,res){

        const posts = postModel.getAllPosts();

        res.status(200).send(posts);
    }

    static addPosts(req,res){


        const {post} = req.body;
        const userUploaded = req.username;

        postModel.addPost(post,userUploaded);

        res.status(200).send('post is uploaded by the user');


    }
}
