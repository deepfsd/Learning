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
            res.render('signupPage.ejs', {err: error.mapped()});
        } else {
            
        }
    })

app.post('/next', (req, res) => {
    req.session.viewCount = req.body.next;
    res.render('index2.ejs', { counts: req.session.viewCount });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});