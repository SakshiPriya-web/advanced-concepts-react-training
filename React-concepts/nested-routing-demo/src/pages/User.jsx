import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <h2>User Page</h2>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default User;
