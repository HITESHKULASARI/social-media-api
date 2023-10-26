
import { ApplicationError } from '../../error-handler/applicationError.js';
import Post from '../posts/posts.model.js';

const  posts = new Post();

export default class LikesModel{
    constructor(like,post,username){

        this.like = like;
        this.post = post;
        this.username = username;
        
    }

    static addLikes(post,name){
        //for finding that post is present or not in my postmodel
        const findPost = posts.getAllPosts().find((p) => p.post == post);


        //if it's not present i am returning it from heres
        if(!findPost)throw new ApplicationError("User not found",404);


        console.log('username',name);
        //if it's present i am checking that does user already liked this post
        let likeInfo = likesStorage.find((p) => p.post == post && p.username == name);

        //if user already liked it i am returning from here
        if(likeInfo){
            throw new ApplicationError('User have already liked the post',400);
        }
        
        //does post is present or not for storing in our likesStorage
        likeInfo = likesStorage.find((p) => p.post == post );
        
        //increasing the like for post api
        if(!likeInfo){
            //if it's not present so i am creating that user
           //then i have to make that post
           let like = 1;
           let username = [name];
           console.log("username array",username);
           const obj = new LikesModel(
               like,
               post,
               username
           ); 
           likesStorage.push(obj);
           findPost.likes = 1;
           
        }else{
            //if post is present already i will just increase the like and push that username
            likeInfo.like += 1;
            likeInfo.username.push(name);
            findPost.likes += 1;
        }
        
        return 1;
       
    }

    static getLikes(post){
        //for finding that post is present or not in my postmodel
        const postByUsers = posts.getAllPosts();
        const findPost = postByUsers.find((p) => p.post == post);
        // if i haven't found the post i am returning from here
        if(!findPost){
            throw new ApplicationError('This post not found',404);
        }

        
        //searching for post in my likesStorage
        const getLikesAssociatedToPost = likesStorage.find((p) => p.post == post);
        //if i haven't received and like yet on that post i am returning from here
        if(!getLikesAssociatedToPost){
            throw new ApplicationError(`don't have any like`,400);
        }
        // else returning it from here
        return getLikesAssociatedToPost;

    }
}

const likesStorage = [];