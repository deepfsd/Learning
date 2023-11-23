// Exercise - Bandname Generator

import bodyParser from "body-parser";
import  express  from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
var __dirname = dirname(fileURLToPath(import.meta.url));
var bandname = "";

var randomNumber = Math.floor(Math.random() * 4 + 1)

app.use(bodyParser.urlencoded({ extended:true }));

function bandNameGenerator(req, res, next)
{
  bandname = req.body["streetName"] + req.body["patName"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res)=>
{
  res.sendFile(__dirname + "/public/index.html")
})
app.post("/submit", (req, res)=>
{
    res.send(` Your band name is: <h1> <b> ${bandname} </b>🥶</h1>`);
})

app.listen(port, ()=>
{
  console.log(`Server running on ${port}`);
})