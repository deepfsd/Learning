import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
var __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res)=>
{
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "orange"],
        htmlContent: "<em> This is some em text </em>"
    }
    res.render(( __dirname +"/view/index.ejs"), data);
});

app.listen(port, ()=>
{
    console.log(`Server is running on ${port}`);
});
