import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import createError from "http-errors"

dotenv.config({ path: "secret.env", quiet: true });

const PORT = process.env.PORT || 3000;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

const app = express();

app.use(express.json());

/**
 * Testing
 */
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});

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
