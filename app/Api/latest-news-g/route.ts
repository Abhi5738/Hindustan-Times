import connectionDb from "../../../dbConnection-latest-news/connectionDb";
import leftContantCards from "../../../models-latest-news/post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectionDb();
    const data = await leftContantCards.find({});
    return NextResponse.json({ msg: "Success", data: data }, { status: 200 });
  } catch (error) {
    console.log(
      "This error is a Get req. Error >>>>>>>>>>>>>>>>>>>>>>:",
      error
    );
    return NextResponse.json({ msg: "Somthing went Wrong" }, { status: 400 });
  }
}
