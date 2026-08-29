import mongoose from 'mongoose';
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: String,
  calorie: Number,
  fat: Number,
  carbohydrate: Number,
  protein: Number,
});

const ingredientModel = mongoose.model("Ingredient", ingredientSchema)

export default ingredientModel;