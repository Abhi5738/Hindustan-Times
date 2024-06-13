import mongoose from "mongoose";

const leftContantSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  description: { type: String },
});

const leftContantCards =
  mongoose.models.leftContantCards ||
  mongoose.model("leftContantCards", leftContantSchema);

export default leftContantCards;
