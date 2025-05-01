import express from "express"; //external module for using express
import pg from "pg";
const { Client } = pg;

let config = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
  ssl: true,
};

//boiler plate express code which allows us to run our web server
const app = express();
const port = 3000;

//we're using json as our data format
app.use(express.json());

//config is saying "this is how we connect to our database", and now I need tools.

//Always connect to the database, give the code, then close the database or else it will time out.

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//helper functions 

async function submitFeedback(obj) {
    const client = new Client(config);
    await client.connect();
    await client.query(`
    INSERT INTO feedback (title, category, description)
    VALUES ('${obj.})`)
}

//api endpoints

app.post("/submit-feedback", async (req, res) => {
    await submitFeedback 
})