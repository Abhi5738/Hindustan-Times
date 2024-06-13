// import { NextResponse } from "next/server";
// import { getDataFromToken } from "../../../helpers/getDataFromToken";
// import connectionDb from "../../../dbConnection-login/connectionDb";
// import signUp from "../../../models-sign-up/post";

// export async function GET(req: any) {
//   try {
//     connectionDb();
//     const userId = await getDataFromToken(req);
//     const user = await signUp.findOne({ _id: userId }).select("-password");

//     if (!user) {
//       return NextResponse.json({ msg: "User Does Not Exists :" });
//     }
//     return NextResponse.json(
//       { message: "USer Found ", data: user },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log(
//       "error profile me :>>>>>>>>>>>??????????>>>>>>>>>>>>>>>>>> ",
//       error
//     );
//     return NextResponse.json({ msg: "somthing went wrong " }, { status: 400 });
//   }
// }
