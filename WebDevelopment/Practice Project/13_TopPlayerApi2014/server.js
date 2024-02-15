import  Express  from "express";

const app = Express();
const port = 4000;
const api_url = 'http://localhost:3000';

const playerData = [
        {
            potential: '94',
            position: 'LW',
            team: 'Real Madrid',
            nationality: 'Portugal',
            name: 'Ronaldo',

        }
]

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})