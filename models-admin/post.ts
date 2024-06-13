import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  description: { type: String },
  image: { type: String },
});

const admin = mongoose.models.admin || mongoose.model("admin", adminSchema);

export default admin;
