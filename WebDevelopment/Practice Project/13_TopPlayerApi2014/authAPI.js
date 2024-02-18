import  Express  from "express";
import  bodyParser  from "body-parser";
const app = Express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userData = [{
    username: "admin",
    password: "admin123"
}]

const tokenKeys = ["CjyOmcnqmy", "QIpqCaogQo", "PNugmm2PJ3", "YiBUUonaMW", "x9nKzKkeLa", "3IXdkFzO7k"];

app.post("/register", (req,res)=>{    
    const user = req.body.username;
    const pass = req.body.password;

    const newUser = [
        {
            username: user,
            password: pass
        }
    ]

    userData.push(newUser);   
    res.json({message: "Successfully Registered"});
})



app.listen(port, ()=>{
    console.log(`Authentication API running on port http://localhost:${port}`);
})