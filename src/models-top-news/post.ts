import mongoose, { Mongoose } from "mongoose";

const BigDataCardsSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  image: { type: String },
});

const BigDataCards =
  mongoose.models.BigDataCards ||
  mongoose.model("BigDataCards", BigDataCardsSchema);

export default BigDataCards;
