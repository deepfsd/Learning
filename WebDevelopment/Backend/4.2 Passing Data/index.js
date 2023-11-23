import  express  from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
var __dirname = dirname(fileURLToPath(import.meta.url));

var fullName = "";

app.use(bodyParser.urlencoded({extended:true}));

function getName(req,res)
{
    fullName = req.body["fName"] + req.body["lName"];
}

app.get("/", (req,res)=>
{
   
    res.render( __dirname + "/view/index.ejs");
});

app.post("/submit", (req, res)=>
{
    getName(req,res);
    const fullNameLength = fullName.length; 
        res.render(__dirname + "/view/index.ejs", {nameLength: fullNameLength} );
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})