import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import pg from 'pg';
import { check, validationResult } from "express-validator";

const app = express();
const port = 3000;

const db = new pg.Client(
    {
        user: 'postgres',
        password: 'Ronaldo@2002',
        host: 'localhost',
        port: 5432,
        database: 'toyshop'
    }
)
db.connect();

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/boys', (req, res) => {
    res.render('boysPage.ejs');
})

app.get('/girls', (req, res) => {
    res.render('girlsPage.ejs');
})

app.get('/login', (req, res) => {
    res.render('loginPage.ejs');
});
app.get('/signup', async (req, res) => {
    res.render('signupPage.ejs');
});

const validationcheck = [
    check('name').notEmpty().withMessage('name is required'),
    check('username').notEmpty().withMessage('username is required'),
    check('password').notEmpty().withMessage('password is required'),
]

app.post('/submit',
    validationcheck
    , (req, res) => {

        // console.log(name.trim() === '');
        const error = validationResult(req);
        if (!error.isEmpty()) {
            res.render('signupPage.ejs', { err: error.mapped() });
        } else {
            const name = req.body.name;
            const username = req.body.username;
            const password = req.body.password;

            try {
                db.query('INSERT INTO userdata(name, username, password) VALUES ($1, $2, $3)', [name, username, password], (err, result) => {
                    if (err) {
                        res.render('signupPage.ejs', { userError: 'username already exist' });
                    } else {
                        res.render('loggedHomePage.ejs', { success: 'successfully registered' });
                    }
                });
            } catch (error) {
                res.render('signupPage.ejs', { userError: 'an error occurred while registering.' });
            }
        }
    })

app.post('/loginSubmit',
    check('username').notEmpty().withMessage('username is required'),
    check('password').notEmpty().withMessage('password is required')
    , async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            res.render('loginPage.ejs', { err: error.mapped() });
        } else {
            try {
                const user = req.body.username;
                const pass = req.body.password;

                const checkData = await db.query('SELECT password FROM userdata WHERE username = $1', [user], (err,result)=>{
                    if(result.rowCount === 0){
                        res.render('loginPage.ejs', {error: 'incorrect username'});
                    }else{
                        if(result.rows[0].password === pass){
                            res.render('loggedHomePage.ejs');
                        }else{
                            res.render('loginPage.ejs', {error: 'incorrect password'});
                        }
                    }
                });

            } catch {

            }
        }
    });

        app.post('/next', (req, res) => {
        req.session.viewCount = req.body.next;
        res.render('index2.ejs', { counts: req.session.viewCount });
    })

        app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    });