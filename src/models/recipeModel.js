import mongoose from 'mongoose';
const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: String,
  author: String,
  body: String,
});

const recipeModel = mongoose.model('Recipe', recipeSchema)

export default recipeModel;