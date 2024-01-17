import Express, { response } from "express";
import { check, validationResult } from "express-validator";
import bodyParser from "body-parser";
import axios from "axios";
const app = Express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(Express.static("public"));

const _user = [];
const _pass = [];

app.get('/', (req, res)=>
{
    res.render('../view/register.ejs');
})

app.post('/register',[
    check('username').notEmpty().withMessage('username is required'),
    check('password').notEmpty().withMessage('password is required')    
] ,async(req,res)=>{

    const errors =  validationResult(req);
    const user = req.body.username;
    const pass = req.body.password;

    if(!errors.isEmpty()){
        res.render('../view/register.ejs', {emperror: errors.mapped()});
    }else{
        try {
            const response = await axios.post('https://secrets-api.appbrewery.com/register',{
                username: `${user}`,
                password: `${pass}`
            })
            if(response.data.success){
                // render login page
                res.redirect('/loginpage');
            }
        } catch (error) {
            res.render('../view/register.ejs', {valierror: error});
        }
    }
})

app.get('/loginpage', (req, res)=>{
    res.render('../view/login.ejs');
})

app.post('/login',[
    check('username').notEmpty().withMessage('username is required'),
    check('password').notEmpty().withMessage('password is required')
], async (req, res)=>{
    const errors = validationResult(req);
    const user = req.body.username;
    const pass = req.body.password; 
    _user.push(user);
    _pass.push(pass);

    if(!errors.isEmpty){
        res.render('../view/login.ejs', {emperror: errors.mapped()})
    }else{
        console.log("No Error");
        try {
            // const response = await axios.get('https://secrets-api.appbrewery.com/all?page=1', {
            // auth : {
            //     username : `${user}`,
            //     password : `${pass}`
            // },
            // })
            //     const randomIndex = Math.floor(Math.random() * response.data.length);
            //     const secret = (response.data[randomIndex].secret);
            //     const emScore = (response.data[randomIndex].emScore);
            //     const username = (response.data[randomIndex].username);
                // res.render('../view/main.ejs', {sec: secret, em: emScore, user: username});
                res.render('../view/main.ejs');

        } catch (error) {
            res.render('../view/login.ejs', {error: "*Incorrect Username & Password"});
        }
    } 
})

app.get('/getRandom', async (req,res)=>{
    
    try {
        const lastIndexUser = _user.length;
        const lastIndexPass = _pass.length;
        const _username = _user[lastIndexUser-1];
        const _password = _user[lastIndexPass-1];
        const response = await axios.get('https://secrets-api.appbrewery.com/all?page=1', {
        auth : {
            username : `${_username}`,
            password : `${_password}`
        },
        })
            const randomIndex = Math.floor(Math.random() * response.data.length);
            const secret = (response.data[randomIndex].secret);
            const emScore = (response.data[randomIndex].emScore);
            const username = (response.data[randomIndex].username);
             res.render('../view/main.ejs', {sec: secret, em: emScore, user: username});


    } catch (error) {
        res.render('../view/main.ejs', {error: "Wait for 15 Minutes"});
    }
})

app.listen(port, ()=>{
    console.log(`Running on ${port}`);
})