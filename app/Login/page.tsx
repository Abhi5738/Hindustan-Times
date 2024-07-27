"use client";

import "../../app/login.css";

import Link from "next/link";

import axios from "axios";

import { toast } from "react-hot-toast";

import { redirect, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import { useAuthProvider } from "../../Context/authProvider";

const page = () => {
  const { isLoggedIn, setIsLoggedIn }: any = useAuthProvider();

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [error, setMsg] = useState("");

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const changeHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response: any = await axios.post(
        "http://localhost:3000/Api/login-p",
        formData
      );

      if (response.data.error) {
        setMsg(response.data.error);

        router.push("/Login");

        setTimeout(() => {
          setLoading(false);
        }, 1000);

        setTimeout(() => {
          setMsg("");
        }, 5000);

        setFormData({
          password: "",

          email: "",
        });
      }

      if (response.data.msg === "SuccessFully") {
        localStorage.setItem("auth-token", response.data.token);

        setIsLoggedIn(true);

        setMsg(response.data.msg);

        router.push("/");

        setTimeout(() => {
          setLoading(false);
        }, 1000);

        setTimeout(() => {
          setMsg("");
        }, 2000);

        setFormData({
          password: "",
          email: "",
        });
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
            <b>Don't have an account?</b>
            <span>
              <Link href={"/SignUp"}> Click here</Link>
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
