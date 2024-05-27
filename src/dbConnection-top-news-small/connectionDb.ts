import mongoose from "mongoose";

export default async () => {
  const dbUrl = process.env.DATABASE_URL;

  if (!dbUrl) throw "Database URL must be defined in the env .";

  await mongoose.connect(dbUrl);
  console.log("connection Successfully... ");
};
