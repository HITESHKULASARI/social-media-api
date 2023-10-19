import jwt from 'jsonwebtoken';

import UserModel from "./user.model.js";

const userModel = new UserModel();

export default class UserControler{

    static addUser(req,res){
        
        const {username,password,email} = req.body;
        
        
        
        userModel.addUser(username,email,password);

        res.status(201).send('User is signedUp');


    }
    static getAllUsers(req,res){

        const result =  userModel.getAllUsers();
        console.log(result);
        res.status(200).send(result);
    }

    static checkUser(req,res){

        const {email,password} = req.body;

        const result = userModel.checkUser(email,password);

        if(!result){
            return res.status(404).send('Invalid User Credentials');


        }
        console.log(result);
        // 1. Create token.
        const token = jwt.sign(
            {
            username: result.username,
            email: result.email,
            },
            'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
            {
            expiresIn: '1h',
            }
            );
        // 2. Send token.
        return res.status(200).send(token);
        

    }
    
}