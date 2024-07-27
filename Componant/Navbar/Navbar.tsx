"use client";
import { useEffect, useState } from "react";
import "./Navbar.css";

const handleNavbarData = async () => {
  const res = await fetch("http://localhost:3000/Api/navbar-g", {
    headers: {
      "content-type": "application/json",
    },
    cache: "no-store",
  });
  const resPosts = await res.json();

  return resPosts;
};

const Navbar = () => {
  const [navbarData, setNavbarData] = useState({ data: [] });

  useEffect(() => {
    (async () => {
      const navbarData = await handleNavbarData();
      setNavbarData(navbarData);
    })();
  }, []);

  return (
    <>
      <div className="navbarContainer">
        <ul>
          {navbarData.data.map((item: any) => {
            return <li className="navbarItem">{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
