import LikesModel from "./likes.model.js";


export default class LikesController{

    addLikes(req,res){
        
        const {post} = req.body;
        const name = req.username;
        const result = LikesModel.addLikes(post,name);

        if(result == -2){
            return res.status(404).send('POST IS NOT FOUND');
        }

        if(result == -1){
            return res.status(404).send('User have already liked the post');
        }

        res.status(200).send('user liked the post');
    }

    getLikes(req,res){
        const {post} = req.body;

        const result = LikesModel.getLikes(post);

        if(result == -1){
            return res.status(404).send('This post not found');
        }

        if(result == -2){
            return res.status(404).send(`don't have any like`);
        }

        return res.status(200).send(result);
    }
}  