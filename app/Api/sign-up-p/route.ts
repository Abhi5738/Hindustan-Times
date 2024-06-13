import connectionDb from "../../../dbConnection-sign-up/connectionDb";
import signUp from "../../../models-sign-up/post";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"; // This Library is used to change real password into hashing form

import jwt from "jsonwebtoken";

export async function POST(req: any) {
  const body = await req.json();

  try {
    await connectionDb();

    const { username, email, password } = body;

    const userEmail = await signUp.findOne({ email });

    if (userEmail) {
      return NextResponse.json(
        { error: "User already exists" },

        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(password, salt);

    const role = req.body.role || "admin";

    const data = await signUp.create({
      id: body.id,

      username: body.username,

      email: body.email,

      password: hashedPassword,

      role: role,
    });

    await data.save();

    const tokenData = {
      id: data._id,
    };

    const token = await jwt.sign({ tokenData }, "mysecretkeyisthi");

    const response = NextResponse.json({
      msg: "SignUp SuccessFully",

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
    return NextResponse.json(
      { msg: "Somthing Went Wrong : >>>>>>>>", error },
      { status: 401 }
    );
  }
}
