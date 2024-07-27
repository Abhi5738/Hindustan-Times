import { NextResponse } from "next/server";
import connectionDb from "../../../dbConnection-login/connectionDb";
import login from "../../../models-login/post";
import bcryptjs from "bcryptjs";
import signUp from "../../../models-sign-up/post";
import jwt from "jsonwebtoken";

const dotenv = require("dotenv");

dotenv.config();

export async function POST(req: any) {
  const body = await req.json();

  try {
    await connectionDb();
    const { email, password } = body;
    const userData = await signUp.findOne({ email });

    if (email === "" && password === "") {
      return NextResponse.json({ error: "Enter Email or Password " });
    }

    if (email === "") {
      return NextResponse.json({ error: "Enter Email  " });
    }

    if (password === "") {
      return NextResponse.json({ error: "Enter Password  " });
    }

    if (!userData) {
      return NextResponse.json({ error: "User Does Not Exists " });
    }

    const validPassword = await bcryptjs.compare(password, userData.password);

    if (!validPassword) {
      return NextResponse.json({ error: "Check your Password" });
    }

    const data = await login.create({
      email: body.email,
      password: body.password,
    });

    await data.save();

    const tokenData = {
      id: data._id,
    };

    const token = await jwt.sign({ tokenData }, "mysecretkey");

    const response = NextResponse.json({
      msg: "SuccessFully",

      success: true,

      token,
    });

    // Set cookies

    response.cookies.set("token", token, { httpOnly: true });

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(
      "This error is a POST req error >>>>>>>>>>>>>>>>>>>>>>>>>>:",
      error
    );
    return NextResponse.json({ msg: "Somthing Went Wrong :" }, { status: 400 });
  }
}
