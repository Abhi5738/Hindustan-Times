import { NextResponse } from "next/server";
import connectionDb from "../../../dbConnection-login/connectionDb";
import login from "../../../models-login/post";
import bcryptjs from "bcryptjs";
import signUp from "../../../models-sign-up/post";
const dotenv = require("dotenv");
// import jwt from "jsonwebtoken";
dotenv.config();

export async function POST(req: any) {
  const body = await req.json();

  try {
    await connectionDb();
    const { email, password } = body;
    const userEmail = await signUp.findOne({ email });
    const userPassword = await signUp.findOne({ password });

    if (userEmail === "" && password === "") {
      return NextResponse.json({ error: "fill the form " });
    }

    if (!userEmail) {
      return NextResponse.json({ error: "User Does Not Exists " });
    }

    const validPassword = await bcryptjs.compare(password, userEmail.password);

    if (!validPassword) {
      return NextResponse.json({ error: "Check your Password" });
    }

    const data = await login.create({
      email: body.email,
      password: body.password,
    });

    await data.save();

    // const tokenData: any = {
    //   id: userEmail._id,
    // };

    // const token = await jwt.verify(tokenData.id, "mysecretkeyisthi");

    //   console.log("login data >>>>>>>>>>>>>>>>>>>>>>>", data);

    return NextResponse.json({ msg: "Succes" }, { status: 200 });
  } catch (error) {
    console.log(
      "This error is a POST req error >>>>>>>>>>>>>>>>>>>>>>>>>>:",
      error
    );
    return NextResponse.json({ msg: "Somthing Went Wrong :" }, { status: 400 });
  }
}
