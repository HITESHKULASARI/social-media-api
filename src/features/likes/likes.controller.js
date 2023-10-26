import LikesModel from "./likes.model.js";


export default class LikesController{

    addLikes(req,res){
        
        const {post} = req.body;
        const name = req.username;
        
        

        const result = LikesModel.addLikes(post,name);

       
        
        

        return res.status(200).send('user liked the post');
    }

    getLikes(req,res){
        const {post} = req.body;

        
        
        try{
            const result = LikesModel.getLikes(post);
        }catch(err){
             
            return res.status(400).send(err.message);
        }
        

        

        return res.status(200).send(result);
    }
}  