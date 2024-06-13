import { NextResponse } from "next/server";
import admin from "../../../models-admin/post";
import connectionDb from "../../../dbConnection-admin/connectionDb";

export async function POST(req: any) {
  const body = await req.json();

  try {
    await connectionDb();
    const data = await admin.create({
      id: body.id,
      title: body.title,
      description: body.description,
      image: body.image,
    });
    await data.save();
    console.log(">>>>>>>>>>", data);
    return NextResponse.json({ msg: "Succes..." });
  } catch (error) {
    console.log("This error occure in Post req. :", error);
    return NextResponse.json({ msg: "Somthing Went Wrong :" });
  }
}
