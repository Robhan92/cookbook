import mongoose from 'mongoose';
const { Schema } = mongoose;

const ingredientModel = new Schema({
  name: String,
  calorie: Number,
  fat: Number,
  carbohydrate: Number,
  protein: Number,
});

export default ingredientModel;