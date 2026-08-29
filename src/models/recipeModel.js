import mongoose from 'mongoose';
const { Schema } = mongoose;

const recipeModel = new Schema({
  title: String,
  author: String,
  body: String,
});

export default recipeModel;