import express, { response } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "oman019";
const yourPassword = "oman019";
const yourAPIKey = "29847169-59b8-4d9c-b6cd-efcb57fe43e9";
const yourBearerToken = "e751d822-a197-499b-a88d-ab1c7e700eb8";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  try {
    const response = await axios.get('https://secrets-api.appbrewery.com/random');
    const data = JSON.stringify(response.data);
    res.render('../views/index.ejs', { content: data });
  } catch (error) {
    const status = error
    const errors = `Too many request | Error: ${status.message}`;
    res.render('../views/index.ejs', { content: errors });
  }
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

  try {
    const response = await axios.get('https://secrets-api.appbrewery.com/all?page=1', {
      auth: {
        username: `${yourUsername}`,
        password: `${yourPassword}`,
      }
    });
    res.render('../views/index.ejs', { content: JSON.stringify(response.data) });
  } catch (error) {
    const status = error
    const errors = `Too many request | Error: ${status.message}`;
    res.render('../views/index.ejs', { content: errors });
  }

});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  try {
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`);
    res.render('../views/index.ejs', { content: JSON.stringify(response.data) });
  } catch (error) {
    const status = error
    const errors = `Too many request | Error: ${status.message}`;
    res.render('../views/index.ejs', { content: errors });
  }

});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

  try {
    const response = await axios.get('https://secrets-api.appbrewery.com/secrets/2', {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      },
    });
    res.render('../views/index.ejs', { content: JSON.stringify(response.data) });
  } catch (error) {
    const status = error
    const errors = `Too many request | Error: ${status.message}`;
    res.render('../views/index.ejs', { content: errors });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
