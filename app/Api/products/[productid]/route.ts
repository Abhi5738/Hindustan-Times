// import connectionDb from "@/dbConnection-admin/connectionDb";
// import admin from "@/models-admin/post";
// import { NextResponse } from "next/server";

// export async function DELETE(req: any) {
//   try {
//     const urlKey = req.nextUrl.searchParams.get("id");
//     // if (!urlKey) {
//     //   return NextResponse.json({ msg: "Missing required urlKey :" });
//     // }
//     await connectionDb();
//     await admin.findOneAndDelete({ urlKey }).exec();
//     return NextResponse.json({ msg: "Delete Command SuccessFully : " });
//   } catch (error) {
//     console.log("error occured >>>>>>>>>>>>>>>>>>", error);
//     return NextResponse.json({ msg: "Soq1mthing Went Wrong" });
//   }
// }
