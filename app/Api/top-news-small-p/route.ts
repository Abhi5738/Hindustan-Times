import { NextResponse } from "next/server";
import connectionDb from "../../../dbConnection-top-news-small/connectionDb";
import SmallDataCards from "../../../models-top-news-small/post";

export async function POST(req: any) {
  const body = await req.json();
  try {
    await connectionDb();
    const data = await SmallDataCards.create({
      id: body.id,
      title: body.title,
      image: body.image,
    });
    await data.save();

    return NextResponse.json({ msg: "Succes" }, { status: 200 });
  } catch (error) {
    console.log("this error is a POST req. error :>>>>>>>>>>>>>>>>> ", error);
    return NextResponse.json(
      { msg: " somthing went wrong >>>>" },
      { status: 400 }
    );
  }
}
