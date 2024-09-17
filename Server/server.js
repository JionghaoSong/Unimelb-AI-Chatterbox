// server.js
const PORT = 3001;
import express, { json, urlencoded } from 'express';
import cors from 'cors';
const app = express();


// middleware
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors(
    // {origin: ['http://127.0.0.1:3000', 'http://127.0.0.1:3001']}
));

// connect to database
import connectDB from '../Database/connection/db.connection.js';
connectDB();

// routes
import DBRoute from "../Database/routes/db.route.js";
app.use("/db", DBRoute);

// OpenAI API
import OpenAIRoute from '../OpenAI/routes/openai.route.js';
app.use("/openai", OpenAIRoute);


// app.post('/completion', );

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));