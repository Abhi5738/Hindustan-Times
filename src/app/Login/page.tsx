"use client";
import "@/app/login.css";
import Link from "next/link";

import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  return (
    <>
      <div className="loginsignup">
        <div className="login-signup-container">
          <h3>Login</h3>
          <div className="login-signup-feilds">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              // onChange={changeHandler}
              // value={formData.email}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              // onChange={changeHandler}
              // value={formData.password}
            />
          </div>
          <button
            //  onClick={handleSubmit}
            className="login-signup-btn"
          >
            Login
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
