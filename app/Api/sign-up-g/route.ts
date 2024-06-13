import connectionDb from "../../../dbConnection-sign-up/connectionDb";
import signUp from "../../../models-sign-up/post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectionDb();
    const data = await signUp.find({});

    return NextResponse.json({ msg: "Success", data: data }, { status: 200 });
  } catch (error) {
    console.log(
      "This error is a Get req. Error >>>>>>>>>>>>>>>>>>>>>>:",
      error
    );
    return NextResponse.json({ msg: "Somthing went Wrong" }, { status: 400 });
  }
}
