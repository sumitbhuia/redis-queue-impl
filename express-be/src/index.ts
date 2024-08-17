import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());


// Creating a redis client
const client = createClient();

// Error handling
client.on('error', (err) => console.log('Redis Client Error', err));

// Routes for the server
// These are the data that we will get from some Big-Machine , ususally in JSON format
app.post("/submit", async (req, res) => {
    const problemId = req.body.problemId;
    const code = req.body.code;
    const language = req.body.language;

    try {

        // The the queue name is "problems" and we are pushing the data in the queue  
        // Converting the JSON data to string and then pushing it to the queue  
        await client.lPush("problems", JSON.stringify({ code, language, problemId }));

        // Normal express response
        res.status(200).send("Submission received and stored.");

    } catch (error) {
        // Error handling
        console.error("Redis error:", error);

        // Normal express response
        res.status(500).send("Failed to store submission.");
    }
});

async function startServer() {
    try {

        // Await for the redis connection to be established
        await client.connect();
        console.log("Connected to Redis");

        // Server will start on port 3000 , only if the connection is established
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

startServer();
