import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (req: any) => {
  try {
    const token = req.cookies.get("token")?.value || "";
    const deCodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return deCodedToken.id;
  } catch (error) {
    console.log("This error is Occure getDataFromToken", error);
    return NextResponse.json({ msg: "Somthing Went Wrong  :" });
  }
};
