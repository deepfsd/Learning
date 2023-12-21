import Express from "express";
import { check, validationResult } from "express-validator";
import bodyParser from "body-parser";
import axios from "axios";
const app = Express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(Express.static("public"));

app.get('/', (req, res)=>
{
    res.render('../view/register.ejs');
})

app.post('/register',[
    check('username').notEmpty().withMessage('Name is required'),
    check('password').notEmpty().withMessage('Password is required')    
] ,async(req,res)=>{

    const errors =  validationResult(req);
    const user = req.body.username;
    const pass = req.body.password;

    if(!errors.isEmpty()){
        res.render('../view/register.ejs', {error: errors.mapped()});
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
            res.render('../view/register.ejs', {logerror: error});
        }
    }
})

app.get('/loginpage', (req, res)=>{
    res.render('../view/login.ejs');
})

app.post('/login',[
    check('username').notEmpty().withMessage('Name is required'),
    check('password').notEmpty().withMessage('Password is required')
], async (req, res)=>{
    const errors = validationResult(req);
    const user = req.body.username;
    const pass = req.body.password;

    
})

app.listen(port, ()=>{
    console.log(`Running on ${port}`);
})