// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation";

// const Profile = () => {
//   const router = useRouter();
//   const [data, setData] = useState("nothing");

//   const getUserDetails = async () => {
//     const res: any = axios.get("http://localhost:3000/Api/me");

//     console.log("response data  > >>", res.data.data._id);

//     setData(res.data._id);
//   };

//   const logOut = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/Api/log-out-g");

//       toast.success("LogOut Success");

//       router.push("/Login");
//     } catch (error: any) {
//       console.log("logOut Faild", error.message);

//       toast.error(error.message);
//     }
//   };
//   return (
//     <div>
//       <h1>This is a profile Page</h1>
//       <h2>
//         {data === "nothing" ? (
//           "nothing"
//         ) : (
//           <Link href={`/Profile/${data}`}>Test{data}</Link>
//         )}
//       </h2>

//       <button onClick={logOut}>LogOut</button>
//       <br></br>
//       <button onClick={getUserDetails}>getUserDetails</button>
//     </div>
//   );
// };

// export default Profile;
