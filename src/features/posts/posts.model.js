

export default class PostsModel{

    constructor(post,userUploaded){
          
        this.post = post;
        this.userUploaded = userUploaded;
        this.likes = 0;
        this.comments = [];
    }

    getAllPosts(){  
        return postsStorage;
    }

    addPost(post,userUploaded){
        
        let obj = new PostsModel(
            post,
            userUploaded           
        );

        postsStorage.push(obj);

    }

    
}

let postsStorage =[];