import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ceuLogo from "../pages/image/ceulogo.png";
import { Badge } from 'antd';

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = () => [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-calendar-line",
    },
    {
      name: "Apply a Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-profile-line",
    },
  ];

  const adminMenu = () => [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Users",
      path: "/users",
      icon: "ri-user-2-line",
    },
    {
      name: "Doctors",
      path: "/doctors",
      icon: "ri-user-add-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-profile-line",
    },
  ];

  const menuToBeRendered = user?.isAdmin ? adminMenu() : userMenu();

  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <img
              src={ceuLogo} // Updated the image import path
              alt="CEU Logo"
              style={{
                width: "100px",
                height: "auto",
                display: "block",
                margin: "20px auto",
              }}
            />
            <hr />
            <hr />
            <div className="menu">
              {menuToBeRendered.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div
                    className={`d-flex menu-item ${
                      isActive && "active-menu-item"
                    }`}
                  >
                    <i className={menu.icon}></i>
                    {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                  </div>
                );
              })}
              <div
                className={`d-flex menu-item`}
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                <i className="ri-logout-circle-line"></i>
                {!collapsed && <Link to="/login">Logout</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="header">
            {collapsed ? (
              <i
                className="ri-menu-2-fill header-action-icon"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-fill header-action-icon"
                onClick={() => setCollapsed(true)}
              ></i>
            )}
            <div className="d-flex align-items-center px-4">
              <Badge count={user?.unseenNotifications.length}>
              <i className="ri-notification-line header-action-icon px-3"></i>
              </Badge>
              
              <Link className="anchor mx-3" to="/profile" style={{ color: "black" }}>
                {user?.name}
              </Link>
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
