import { NextResponse } from "next/server";
import connectionDb from "../../../dbConnection-navbar/connectionDb";
import navbar from "../../../models-navbar/post";

export async function GET() {
  try {
    await connectionDb();
    const data = await navbar.find({});

    return NextResponse.json({ msg: "Success", data: data }, { status: 200 });
  } catch (error) {
    console.log(
      "This error is a Get req. Error >>>>>>>>>>>>>>>>>>>>>>:",
      error
    );
    return NextResponse.json({ msg: "Somthing went Wrong" }, { status: 400 });
  }
}
