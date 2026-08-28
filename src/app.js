import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "secret.env", quiet: true });

const PORT = process.env.PORT || 3000;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World')
})

/*
 * Connect to Database before listening to PORT.
 */
mongoose
  .connect(CONNECTION_STRING)
  .then(() => {
    console.log("Successfully connected to the database.");
    app.listen(PORT, () => {
      console.log(`Server is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to database", err);
  });
