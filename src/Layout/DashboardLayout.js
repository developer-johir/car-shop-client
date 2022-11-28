import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header></Header>

      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">My All Products</Link>
            </li>
            <li><Link to="/dashboard/allusers">All Users</Link></li>
                <li><Link to="/dashboard/allusers">my Product</Link></li>
            {
              isAdmin && <>
                <li><Link to="/dashboard/allusers">All Users</Link></li>
                <li><Link to="/dashboard/allusers">my Product</Link></li>
              </>
            }
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
