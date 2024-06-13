import "./Navbar.css";

const handleNavbarApi = async () => {
  const res = await fetch("http://localhost:3000/Api/navbar-g", {
    headers: {
      "content-type": "application/json",
    },
    cache: "no-store",
  });
  const resPosts = await res.json();

  return resPosts;
};

const Navbar = async () => {
  const NavbarApi = await handleNavbarApi();
  return (
    <>
      <div className="navbarContainer">
        <ul>
          {NavbarApi.data.map((item: any) => {
            return <li className="navbarItem">{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
