import mongoose, { Mongoose } from "mongoose";

const SmallDataCardsSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  image: { type: String },
});

const SmallDataCards =
  mongoose.models.SmallDataCards ||
  mongoose.model("SmallDataCards", SmallDataCardsSchema);

export default SmallDataCards;