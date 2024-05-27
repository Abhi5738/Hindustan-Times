import mongoose from "mongoose";

const navbarContantSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
});

const navbar =
  mongoose.models.navbar || mongoose.model("navbar", navbarContantSchema);

export default navbar;
