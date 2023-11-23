//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from 'body-parser';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;
var __dirname = dirname(fileURLToPath(import.meta.url)); 


app.get("/", (req, res)=>
{
    res.sendFile(__dirname + "/public/index.html");
})

app.use(bodyParser.urlencoded({extended: true}))
app.post("/check", (req,res)=>
{
    if(req.body["password"] === "ILoveProgramming")
    {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html"); // or res.redirect("/")
        
    }
})

app.listen(port, ()=>
{
    console.log(`Your server running on ${port}`);
})