import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import axios from "axios";
import { setTimeout } from "timers/promises";

const app = Express();
const port = 4000;
const api_url = 'http://localhost:3000';
var __dirname = dirname(fileURLToPath(import.meta.url));
const auth_Api_URL = 'http://localhost:5000';

const playerData = [
    {
        potential: '94',
        position: 'LW',
        team: 'Real Madrid',
        nationality: 'Portugal',
        name: 'Ronaldo',
        nationalityImagePath: '/images/portugal.png',
        nationAlt: 'portugal',
        teamImagePath: '/images/rm.png',
        teamAlt: 'realmadrid',
        playerImagePath: '/images/cr7.png',
        playerAlt: 'cr7'
    },
]

app.use((req, res, next) => {
    if (!req.app.locals.serverStarted) {
        // Set a flag to indicate that the server has started
        req.app.locals.serverStarted = true;

        // Redirect to home page on server restart
        return res.redirect('/');

    }
    next();
});


app.use(Express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('register.ejs');
})

app.get('/tokenPage', (req,res)=>{
    res.render('token.ejs');
})

function validationCheckUsername(user) {

    if (user.length < 3) {
        return false;
    }
    return true;
}
function validationCheckPassword(pass) {
    if (pass.length < 6) {
        return false;
    }
    return true;
}


app.post('/register', async (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;
    const isUsernameValid = validationCheckUsername(user);
    const isPasswordValid = validationCheckPassword(pass);


    if (isUsernameValid && isPasswordValid) {
        try {
            const response = await axios.post(`${auth_Api_URL}/register`, req.body,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'    // edge case: use headers while you use axios to provide req.body to api file.
                }
            });
            const message = response.data.message;
            res.render('register.ejs', { successMessage: `*${message}` })
        } catch (error) {
            console.log("Error");
        }
    } else {
        res.render('register.ejs', { invalidMessage: "*invalid username & password", userMessage: "*username should more then 3 characters", passMessage: "*password should more then 6 characters" });
    }
    
})

app.post('/generateToken', (req,res)=>{
    const tokenUser = req.body.username;
    const tokenPass = req.body.password;
    console.log(tokenUser);
    console.log(tokenPass);
    const isUsernameValid = validationCheckUsername(tokenUser);
    const isPasswordValid = validationCheckPassword(tokenPass);

    if(isUsernameValid && isPasswordValid){
        
    }else{
        res.render('token.ejs', { invalidMessage: "*invalid username & password" });
    }
})

app.get('/cardPage', (req, res)=>{
    res.render('card.ejs', {playerDetails: playerData});
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

// facing problem to req.body to authAPI.js console.log(req.body.username);


