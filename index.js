import express from 'express';


const server = express();


server.get('/',(req,res)=>{
    res.status(200).send('now from here we will create');
})

server.listen(8000,(err)=>{
    if(err){
        res.status(400).send('error in server while running the code');
    }

    console.log('server is running on the port : 8000');
})
