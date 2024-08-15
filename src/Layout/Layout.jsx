import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
