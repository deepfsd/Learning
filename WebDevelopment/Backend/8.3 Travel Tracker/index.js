import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client(
  {
    user: 'postgres',
    password: 'Ronaldo@2002',
    host: 'localhost',
    port: '5432',
    database: 'world'
  }
);
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function visited_countries(){

  const result = await db.query("SELECT country_code from visited_countries");
  let countries = [];
  result.rows.forEach(country => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await visited_countries();
  console.log(countries);
  res.render('index.ejs', { countries: countries, total: countries.length });
});

app.post('/add', async (req, res) => {  
    const input = req.body.country;
    
    try {
      const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'", [input.toLowerCase()]); 
      const data = result.rows[0];
      const countryCode = data.country_code;
      try {
        console.log(countryCode);
        db.query('INSERT INTO visited_countries(country_code) VALUES ($1)', [countryCode]);
        res.redirect('/');
      } catch (error) {
        const countries = await visited_countries();
        res.render('index.ejs', {countries: countries, total: countries.length, error: 'Country already has been added, try again'});
      }
    } catch (error) {
      const countries = await visited_countries();
      res.render('index.ejs', {countries: countries, total: countries.length, error: 'Country does not exist, try again'});
    }

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
