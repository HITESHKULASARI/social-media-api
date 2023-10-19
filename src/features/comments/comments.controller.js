
import CommentModel from "./comments.model.js";



export default class CommentsController{
    
    addComment(req,res){

        const username = req.username;
        const {post,comment} = req.body;
        console.log(post,comment);
        // sending to the commentModel
        const result = CommentModel.addComment(post,username,comment);
        // if result is not found 
        if(!result){
            return res.status(404).send('post associated with user not found');
        }
        // if we have added the message successfully
        res.status(200).send(
            "comment is added to the post"   
        );

        

    }

    
}