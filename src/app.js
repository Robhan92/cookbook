import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from 'url'
import path from 'path'
import session from 'express-session'
import logger from 'morgan'
import authRouter from "./routes/authRouter.js";
import createError from "http-errors"

dotenv.config({ path: "secret.env", quiet: true });

const filePath = fileURLToPath(import.meta.url)
const directoryPath = path.dirname(filePath)

const PORT = process.env.PORT || 3000;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(directoryPath, 'views'))

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(directoryPath, 'public')))


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}
))

app.use(authRouter)

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
