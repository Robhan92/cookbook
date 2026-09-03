import mongoose from 'mongoose';
import bcrypt from "bcryptjs"

const { Schema } = mongoose;
const saltRounds = 10;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  } else {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
});

const userModel = mongoose.model('User', userSchema)

export default userModel;