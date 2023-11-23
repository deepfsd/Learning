const fs = require("fs");

// fs.writeFile("message.txt", "Hello Duniya", (err)=>
// {
//     if (err) throw err;
//     console.log("File save ho gayi hai")
// })

fs.readFile("./message.txt", "utf-8", (err,data)=>
{
    if (err) throw err;
    console.log(data);
})