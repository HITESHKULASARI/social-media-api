

export default class UserModel{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    addUser(username,email,password){
        //creating the object of user
        const obj = {
            username,
            email,
            password
        }
        //storing the user
        userStorage.push(obj);
    }

    checkUser(email,password){

        const valid = userStorage.findIndex((u) => 

            u.email == email && u.password == password
        )

        return userStorage[valid];
    }
}

let userStorage = [];