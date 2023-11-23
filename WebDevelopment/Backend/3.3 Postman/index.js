import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/register", (req, res) => {
    res.sendStatus(201)  // 201 created 
})

app.put("/user/Deepanshu", (req, res) => {
    res.sendStatus(200) // 200 ok 
})

app.patch("/user/Deepanshu", (req, res) => {
    res.sendStatus(200) // 200 ok
})

app.delete("/user/Deepanshu", (req, res) => {
    res.sendStatus(201) // 201 created
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})