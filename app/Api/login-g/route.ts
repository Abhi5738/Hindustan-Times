import connectionDb from "../../../dbConnection-login/connectionDb";
import login from "../../../models-login/post";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectionDb();
    const data = await login.find({});

    return NextResponse.json({ msg: "Success", data: data }, { status: 200 });
  } catch (error) {
    console.log(
      "This error is a Get req. Error >>>>>>>>>>>>>>>>>>>>>>:",
      error
    );
    return NextResponse.json({ msg: "Somthing went Wrong" }, { status: 400 });
  }
}
