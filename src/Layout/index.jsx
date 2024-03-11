import React from "react";
import Header from "./Header/index.jsx";
import Navbarfunc from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Navbarfunc />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
