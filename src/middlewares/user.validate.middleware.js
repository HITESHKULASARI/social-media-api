

import validator from  'validator';

import emailValidator from 'email-validator';
import PasswordValidator from 'password-validator';

const userValidator = function(req,res,next){
    const {username,email,password} = req.body;
    //if username is not provided by the user
    if(!username || !email || !password){
        return res.status(404).send('please provide username or password or email');
    }
    //for checking email is valid or not
    const validEmail =  emailValidator.validate(email);

    if(!validEmail){
        return  res.status(401).send({"error": "Authentication failed",
        "message": "Incorrect email . Please check your credentials and try again."});
    }

    if(!validator.matches(username, "^[a-zA-Z]")){
        return res.status(404).send('please enter a valid user name');
      }

    //validating password 

   

    // Create a schema
    var schema = new PasswordValidator();

    // Add properties to it
    schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

    const checkPassword = schema.validate(password);
    
    if(!checkPassword){
        res.status(401).send({
            "message":"bhai strong password daal de",
            "error" :"Minimum length 8,Maximum length 100,Must have uppercase letters,Must have lowercase letters,Must have at least 2 digits,Should not have spaces,you can't enter Passw0rd and Password123"
        })
    }


    next();

    
}


export default userValidator;