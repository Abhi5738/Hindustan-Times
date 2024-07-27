"use client";
import BodyContant from "../Componant/BodyContant/BodyContant";
import Header from "../Componant/Header/Header";
import Navbar from "../Componant/Navbar/Navbar";
import { AuthProvider, useAuthProvider } from "../Context/authProvider";
import Login from "./Login/page";

const PageContent = () => {
  const data = useAuthProvider();
  if (data.isLoading) {
    return (
      <>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",

            height: "100vh",
          }}
        >
          Loading...
        </h1>
      </>
    );
  }
  return (
    <>
      {data.isLoggedIn ? (
        <>
          <Header />
          <Navbar />
          <BodyContant />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

const Page = () => (
  <AuthProvider>
    <PageContent />
  </AuthProvider>
);

export default Page;
