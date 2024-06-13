import Link from "next/link";
import "../../app/admin.css";

const AdminHeader = () => {
  return (
    <div>
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link href={"#Dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"#Users"}>Users</Link>
          </li>
          <li>
            <Link href={"#Products"}>Add Products</Link>
          </li>
          <li>
            <Link href={"#Settings"}>Settings</Link>
          </li>
          <li>
            <Link href={"#Logout"}>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHeader;
