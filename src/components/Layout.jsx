import React from "react";
import ChildrenData from "../types/ChildrenData";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: ChildrenData.isRequired,
};

export default Layout;
