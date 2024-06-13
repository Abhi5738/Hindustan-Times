import mongoose from "mongoose";

const loginContantSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
});

const login =
  mongoose.models.login || mongoose.model("login", loginContantSchema);

export default login;
