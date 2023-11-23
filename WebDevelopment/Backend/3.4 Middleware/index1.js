import bodyParser from "body-parser";
import express  from "express";
import  {dirname}  from "path";
import {fileURLToPath} from "url";
const app = express();
const port = 3000;
var __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res)=>
{
    res.sendFile(__dirname + "/public/index.html");
})

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req,res)=>
{
  console.log(req.body);
})

app.listen(port, ()=>
{
   console.log(`Server running on ${port}`);
})
