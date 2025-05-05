import dotenv from "dotenv";
dotenv.config();
import express from "express"; //external module for using express
import pg from "pg";
const { Client } = pg;


let config = {
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: Number(process.env.DATABASE_PORT),
  ssl: true, //change to true when connecting to Render
};

console.log("Loaded config:", config);

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

async function submitFeedback(feedback) {
  console.log("Submitting feedback:", feedback); // ✅ logs before anything else
    const client = new Client(config);
    await client.connect();
    await client.query(`
    INSERT INTO feedback (title, category, description)
    VALUES ($1, $2, $3)`,
    [feedback.title, feedback.category, feedback.description]
);
await client.end();
}

async function getAllFeedback() {
  const client = new Client(config);
  await client.connect();
  
  const result = await client.query("SELECT * FROM feedback");

  await client.end();
  return result.rows; //this returns an array of feedback objects
}

//api endpoints

app.post("/submit-feedback", async (req, res) => {
  try {
    await submitFeedback(req.body);
    res.status(200).send("Feedback received!");
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).send("Internal Server Error");
  }
});
//What Happens When You Hit /feedback in Your Browser/Postman:
  //-It runs getAllFeedback()
  //-It fetches all rows from the database
  //-It returns them as JSON to the frontend

app.get("/feedback", async (req, res) => {
  try {
    const feedbackList = await getAllFeedback();
    console.log(feedbackList); // <-- This is the debug line
    res.status(200).json(feedbackList);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).send("Failed to fetch feedback");
  }
});