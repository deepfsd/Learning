import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import session from 'express-session';

const app = express();
const port = 3000;

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}))

const db = new pg.Client(
    {
        user: 'postgres',
        password: 'Ronaldo@2002',
        host: 'localhost',
        port: '5432',
        database: 'myDatabase'
    }
)
db.connect();

async function getIndex(){
    let id = [];
    const result = await db.query('SELECT id FROM player');
    result.rows.forEach(player => {
        id.push(player.id);
    });

    return id;

}

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async(req,res)=>{
    const result = await db.query('SELECT * FROM player');
    let player = [];
    result.rows.forEach((players) => {
        player.push(players.name);
    });
    const id = await getIndex();
    console.log(id);
    res.render('index.ejs', { playersid: id ,players: player});
});

app.post('/add', async(req,res)=>{
    const input = req.body.name;
    console.log(input);
    db.query('INSERT INTO player(id, name) VALUES($1, $2)', [4 ,input] );
    res.redirect('/');
})


app.post('/next', (req,res)=>{
    req.session.viewCount = req.body.next;
    res.render('index2.ejs', {counts: req.session.viewCount});
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});