import { NextResponse } from "next/server";
import connectionDb from "../../../dbConnection-admin/connectionDb";
import admin from "../../../models-admin/post";

export async function GET() {
  try {
    await connectionDb();
    const data = await admin.find({});
    return NextResponse.json({
      msg: "Get request is succesfully : ",
      data: data,
    });
  } catch (error) {
    console.log("Somthing Went Wrong :", error);
    return NextResponse.json({ msg: "Somthing Went Wrong :" });
  }
}
