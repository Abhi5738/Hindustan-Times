import Link from "next/link";
import "./Header.css";

const Header = () => {
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

          <button>
            <Link href={"/SignUp"}>SignUp</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
