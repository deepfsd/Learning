import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// Server 
const app = express();
const port = 3000;

// Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Database

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "todo",
  password: "Ronaldo@2002",
  post: 5432,
})
db.connect();

// Routes and Backend

var items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function getUser(){
    const result = await db.query("SELECT * FROM items");
    items = result.rows;
}

app.get("/", async (req, res) => {

  await getUser();
  
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

async function addItem(item){
    await db.query("INSERT INTO items(title) VALUES($1)", [item]);
}

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await addItem(item);
  res.redirect("/");
});

app.post("/edit", async (req, res) => {

  const title = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  try {
    // edge case i use INSERT istead UPDATE 
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [title, id]);
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

app.post("/delete", async (req, res) => {

  const id = req.body.deleteItemId;

  await db.query('DELETE FROM items WHERE id = $1', [id]);

  res.redirect('/');

});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
