"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../../app/login.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const page = () => {
  const [select, setSelect] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "admin",
  });

  const selectHandler = (e: any) => {
    setSelect(e.target.value);

    setFormData({ ...formData, role: e.target.value });

    // console.log(formData);
  };

  const changeHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (formData.email === "" && formData.password === "") {
        setError("Check your email Or password");

        return;
        // router.push("/Login");
      }
      const response = await axios.post(
        "http://localhost:3000/Api/sign-up-p",

        formData
      );
      console.log("toknme>>>>>>>>>", response.data.token);
      if (response) {
        localStorage.setItem("auth-token", response.data.token);
        Cookies.set("auth-token", response.data.token);
      }
      setLoading(false);

      router.push("/Login");
    } catch (error: any) {
      console.log(" SignUp Faild ", error);
      console.log("failed ");

      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      formData.email.length > 0 &&
      formData.password.length > 0 &&
      formData.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  return (
    <div>
      <div className="loginsignup">
        <div className="login-signup-container">
          <p>{error}</p>
          <p>{loading ? "Procesing..." : "SignUp"}</p>
          {/* <p>SignUp</p> */}
          <div className="login-signup-feilds">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              onChange={changeHandler}
              value={formData.username}
            />

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
            {buttonDisabled ? "No signup" : "Signup"}
          </button>
          <select id="role" value={select} onChange={selectHandler}>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
          <div className="login-signup-already">
            Already have an account?{" "}
            <span>
              <Link href={"/Login"}>Login here</Link>
            </span>
          </div>

          <div className="login-signup-agree">
            <input type="checkbox" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
