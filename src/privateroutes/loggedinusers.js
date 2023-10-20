import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/login";

export default function Loggedinuser() {
  const user = useSelector((users) => users.login.loggedIn);
  return user ? <Outlet /> : <LoginPage />;
}
