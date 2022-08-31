import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/NavAndSidebar";
import Footer from "../footer";

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
