import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Ronaldo@2002",
  port: 5432, 
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;



async function getUser(){
  let result = await db.query("SELECT * FROM users");

  let userDetails = result.rows;

  return userDetails;
}

async function currentUser(){
  let result = await db.query("SELECT color FROM users WHERE id = $1", [currentUserId]);

  return result.rows[0].color;
}

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  let colors = await currentUser();
  let users = await getUser();
  res.render("index.ejs", { 
    countries: countries,
    total: countries.length,
    users: users,
    color: colors,
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {

    const user = req.body.user;
    currentUserId = user;

    res.redirect('/');

});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html adasdsad
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
