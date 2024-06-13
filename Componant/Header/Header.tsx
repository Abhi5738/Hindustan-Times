"use client";
import "./Header.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

const Header = () => {
  const router = useRouter();

  const logOut = async () => {
    try {
      deleteCookie("loged")
      const res = await axios.get("http://localhost:3000/Api/log-out-g");

      toast.success("LogOut Success");
      localStorage.removeItem("auth-token");
      router.push("/Login");
    } catch (error: any) {
      console.log(error);

      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="headerContainer">
        <div className="headerLeft">
          <h1>Left</h1>
        </div>
        <div className="headerCenter">
          <h1>Hindustan Tims</h1>
        </div>
        <div className="headerRight">
          <h1>Right</h1>

          {/* <button>
            <Link href={"/SignUp"}>SignUp</Link>
          </button> */}
          <button onClick={logOut}>LogOut</button>
        </div>
      </div>
    </>
  );
};

export default Header;
