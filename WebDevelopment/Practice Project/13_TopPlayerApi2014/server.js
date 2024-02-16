import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = Express();
const port = 4000;
const api_url = 'http://localhost:3000';
var __dirname = dirname(fileURLToPath(import.meta.url));


app.use(Express.static("public"));

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
    {
        potential: '94',
        position: 'CF',
        team: 'Barcelona',
        nationality: 'Argentina',
        name: 'Messi',
        nationalityImagePath: '/images/argentina.png',
        nationAlt: 'argentina',
        teamImagePath: 'images/barca.png',
        teamAlt: 'barcelona',
        playerImagePath: '/images/messi.png',
        playerAlt: 'messi',
    },
    {
        potential: '84',
        position: 'ST',
        team: 'Barcelona',
        nationality: 'Brazil',
        name: 'Neymar',
        nationalityImagePath: '/images/brazil.png',
        nationAlt: 'brazil',
        teamImagePath: '/images/barca.png',
        teamAlt: 'barcelona',
        playerImagePath: '/images/neymar.png',
        playerAlt: 'neymar'
    }
]

app.get('/', (req,res)=>{
    res.render('index.ejs', {playerDetails: playerData})
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})