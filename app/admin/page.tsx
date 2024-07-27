"use client";
import "../../app/admin.css";
import "../../app/login.css";
// import Link from "next/link";
import { useState } from "react";
const page = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
  });

  const changeHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    const method = "POST";
    e.preventDefault();
    const res = await fetch("http://localhost:3000/Api/admin-p", {
      method,
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    });
    // console.log("response : ", res);
    setFormData({
      id: "",
      title: "",
      description: "",
      image: "",
    });
  };
  return (
    <>
      <div>
        <main>
          <div className="loginsignup">
            <div className="login-signup-container">
              <div className="login-signup-feilds">
                <input
                  type="text"
                  name="id"
                  placeholder="Enter your Id"
                  onChange={changeHandler}
                  value={formData.id}
                />

                <input
                  type="text"
                  name="title"
                  placeholder="Enter your Title"
                  onChange={changeHandler}
                  value={formData.title}
                />

                <input
                  type="text"
                  name="description"
                  placeholder="Enter your Description"
                  onChange={changeHandler}
                  value={formData.description}
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Enter your Image url"
                  onChange={changeHandler}
                  value={formData.image}
                />
              </div>
              <button onClick={handleSubmit} className="login-signup-btn">
                Submit
              </button>
            </div>
          </div>
        </main>
        <footer>
          <p>&copy; 2024 Admin Page</p>
        </footer>
      </div>
    </>
  );
};

export default page;
