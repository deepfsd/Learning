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

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];


async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries JOIN users ON users.id = user_id WHERE user_id = $1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

async function getCurrentUser() {
  let result = await db.query("SELECT * FROM users");
  users = result.rows;
  return users.find((user) => user.id == currentUserId);
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  const currentUser = await getCurrentUser();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentUser.color,
  });
});

app.get("/new", async (req, res) => {
  res.render('new.ejs');
})

app.post("/add", async (req, res) => {

  const country = req.body.country;
  console.log(country);

  try {
    const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'",
      [country.toLowerCase()]);

    const countries = result.rows[0];
    const country_code = countries.country_code;

    try {
      await db.query("INSERT INTO visited_countries(country_code, user_id) VALUES ($1, $2)", [country_code, currentUserId]);
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    const countries = await checkVisisted();
    const currentUser = await getCurrentUser();
    const error_message = 'Country Not Found';
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      users: users,
      color: currentUser.color,
      error: error_message,
    });
  }


});
app.post("/user", async (req, res) => {

  const user = req.body.user;
  currentUserId = user;
  if (req.body.user) {
    res.redirect('/');
  } else if (req.body.add) {
    res.redirect('/new');
  }

});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html adasdsad

  let name = req.body.name;
  let color = req.body.color;

  let result = await db.query("INSERT INTO users(name, color) VALUES($1, $2) RETURNING *;", [name, color]);

  currentUserId = result.rows[0].id;

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
