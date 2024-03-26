import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port  = 3000;

app.get('/', (req,res)=>{
    res.render('mainPage.ejs');
})

app.use(port, ()=>{
    console.log(`Server is running on ${port}`);
});