import UserModel from "./user.model.js";

const userModel = new UserModel();

export default class UserControler{

    static addUser(req,res){
        
        const {username,password,email} = req.body;
        
        
        
        userModel.addUser(username,email,password);

        res.status(201).send('User is signedUp');


    }

    static checkUser(req,res){

        const {email,password} = req.body;

        const result = userModel.checkUser(email,password);

        if(!result){
            return res.status(404).send('Invalid User Credentials');
        }else{
            return res.status(200).send(result);
        }



    }
    
}