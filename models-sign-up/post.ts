import mongoose from "mongoose";

const signUpContantSchema = new mongoose.Schema({
  id: { type: Number },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  role: { type: String },
});

const signUp =
  mongoose.models.signUp || mongoose.model("signUp", signUpContantSchema);

export default signUp;
