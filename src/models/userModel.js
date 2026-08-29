import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
});

const userModel = mongoose.model('User', userSchema)

export default userModel;