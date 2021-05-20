import React from "react";
import ChildrenData from "../types/ChildrenData";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: ChildrenData.isRequired,
};

export default Layout;
