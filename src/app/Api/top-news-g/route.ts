import connectionDb from "@/dbConnection-top-news/connectionDb";
import BigDataCards from "@/models-top-news/post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectionDb();
    const data = await BigDataCards.find({});

    return NextResponse.json({ msg: "Succes", data: data }, { status: 200 });
  } catch (error) {
    console.log("This is a GET request Error : >>>>>>>>", error);
    return NextResponse.json(
      { msg: "Somthing went wrong : " },
      { status: 400 }
    );
  }
}
