import { NextResponse } from "next/server";
import connectionDb from "../../../dbConnection-sign-up/connectionDb";

export async function GET(req: any) {
  connectionDb();
  try {
    const response = NextResponse.json({
      msg: "LogOut successfully",
      succes: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.log("This error is a logOut error : ", error);

    return NextResponse.json(
      { mesage: "Somthing went wrong  : " },
      { status: 400 }
    );
  }
}
