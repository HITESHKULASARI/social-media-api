import PostsModel from '../posts/posts.model.js'

const postsmodel = new PostsModel();
export default class CommentModel{
    constructor(comment,username){
        this.comment = comment;
        this.username = username;

    }

    static addComment(postFind,username,comment){
        //getting all the posts array
        const postArray = postsmodel.getAllPosts();
        //finding the post associated to username
        const post = postArray.find((p)=>p.userUploaded == username && p.post == postFind);
        console.log("you are cutiee",postArray,postFind,username,comment);
        if(!post){
            return post;
        }

        const obj = new CommentModel(
            username,
            comment
        );

        post.comments.push(obj);
        
        return post;
        
    }
}