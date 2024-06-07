import express from "express";
import pg from "pg";

// Server
const app = express();
const port = 3000;

// Static File
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('index.ejs');
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});