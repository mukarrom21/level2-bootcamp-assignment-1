import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Routes

app.get("/", (req, res) => {
  res.send("Welcome to my bootcamp first assignment!");
});

export default app;
