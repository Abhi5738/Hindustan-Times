"use client";
import "../../app/login.css";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setCookie } from "cookies-next";

const page = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const changeHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setCookie("loged", "true");
      if (formData.email === "" && formData.password === "") {
        setError("Check your email Or password");
        return;
        // router.push("/Login");
      }
      setLoading(true);
      const response: any = await axios.post(
        "http://localhost:3000/Api/login-p",
        formData
      );

      if (response.data.error) {
        setError(response.data.error);

        setLoading(false);

        router.push("/Login");
      } else {
        router.push("/");
      }
    } catch (error: any) {
      console.log("LogIn Faild", error);

      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (formData.email.length > 0 && formData.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  return (
    <>
      <div className="loginsignup">
        <div className="login-signup-container">
          <p>{error}</p>
          <p>{loading ? "Procesing..." : "LogIn"}</p>
          <div className="login-signup-feilds">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={changeHandler}
              value={formData.email}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={changeHandler}
              value={formData.password}
            />
          </div>
          <button onClick={handleSubmit} className="login-signup-btn">
            {buttonDisabled ? "Not Login" : "Login"}
          </button>

          <div className="login-signup-already">
            Create an account?
            <span>
              <Link href={"/SignUp"}>Click here</Link>
            </span>
          </div>

          <div className="login-signup-agree">
            <input type="checkbox" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;