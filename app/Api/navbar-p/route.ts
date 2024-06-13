import { NextResponse } from "next/server";
import connectionDb from "../../../dbConnection-navbar/connectionDb";
import navbar from "../../../models-navbar/post";

export async function POST(req: any) {
  // console.log(req);
  const body = await req.json();

  try {
    await connectionDb();
    const data = await navbar.create({
      id: body.id,
      title: body.title,
    });
    await data.save();

    return NextResponse.json({ msg: "Succes" }, { status: 200 });
  } catch (error) {
    console.log(
      "This error is a POST req error >>>>>>>>>>>>>>>>>>>>>>>>>>:",
      error
    );
    return NextResponse.json({ msg: "Somthing Went Wrong :" }, { status: 400 });
  }
}
