import "@/app/admin.css";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>This is a Admin Page</h1>
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
              <Link href={"#Products"}>Products</Link>
            </li>
            <li>
              <Link href={"#Settings"}>Settings</Link>
            </li>
            <li>
              <Link href={"#Logout"}>Logout</Link>
            </li>
          </ul>
        </nav>
        <main>
          <section>
            <h2>Dashboard</h2>
            <p>Welcome to the admin dashboard!</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Admin Page</p>
        </footer>
      </div>
    </>
  );
};

export default page;
