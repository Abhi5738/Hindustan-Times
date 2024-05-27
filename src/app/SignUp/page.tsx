"use client";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/login.css";

const page = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    const method = "POST";
    e.preventDefault();
    const res = await fetch("", {
      method,
      body: JSON.stringify(formData),
    });
    console.log("response : ", res);
  };
  return (
    <div>
      <div className="loginsignup">
        <div className="login-signup-container">
          <p>SignUp</p>
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
            Continue
          </button>
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
