import express from 'express';
import axios from 'axios';
import bodyParser from "body-parser";
import { check, validationResult } from "express-validator";
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


let key = "";

// Middleware to redirect on server restart
app.use((req, res, next) => {
    if (!req.app.locals.serverStarted) {
        // Set a flag to indicate that the server has started
        req.app.locals.serverStarted = true;

        // Redirect to home page on server restart
        return res.redirect('/');

    }
    next();
});

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/copy', (req, res) => {
    console.log(`This is copy key: ${key}`);
    res.render('copy.ejs', { content: key });
});

app.post('/generate', async (req, res) => {
    try {
        const response = await axios.get('https://secrets-api.appbrewery.com/generate-api-key');
        key = response.data.apiKey;
        console.log(`generate key: ${key}`);
        res.redirect('/copy');
    } catch (error) {
        console.log("Not Ok");
        res.status(500).send("Internal Server Error");
    }
});

app.post('/back', (req, res) => {
    res.redirect('/');
});

app.get('/secretPage', (req, res) => {
    res.render('secretsPage.ejs');
})

app.post('/apply', (req, res) => {
    res.redirect('/secretPage');
})

let secret = "";

app.get('/showSecret', (req, res) => {
    res.render('secretsPage.ejs', { content: secret });
})

app.post('/getsecret', [
    check('apiK').notEmpty().withMessage('api key is required'),
], async (req, res) => {
    console.log("ok");
    const error = validationResult(req);
    const api = req.body.apiK;
    const ems = req.body.emScore;
    console.log(api);
    if (!error.isEmpty) {
        res.render('secretsPage.ejs', { err: error.mapped() })
    } else {
        try {
            // const response = await axios.get("https://secrets-api.appbrewery.com/filter", {
            //     params: {
            //         score: ems,
            //         apiKey: api,
            //     },
            // });
            const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=${ems}&apiKey=${api}`);
                const resLength = JSON.stringify(response.data.length);
                console.log(resLength);
                const random = Math.floor(Math.random() * resLength);
                secret = JSON.stringify(response.data[random].secret);
                console.log(secret);
                res.redirect('/showSecret');
            
        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    }
})

app.listen(port, () => {
    console.log(`Running on ${port}`);
});


