import React from "react";
import PropTypes from "prop-types";
import ChildrenData from "../types/ChildrenData";

function Component({ element, size, color, children, classes }) {
  const Tag = element;

  let allClasses = classes;
  if (size === "h1") {
    allClasses = `text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${classes} ${color}`;
  } else if (size === "h2") {
    allClasses = `text-3xl font-extrabold tracking-tight sm:text-4xl ${classes} ${color}`;
  } else if (size === "h3") {
    allClasses = `text-2xl font-semibold ${color}`;
  }

  return <Tag className={allClasses}>{children}</Tag>;
}

Component.defaultProps = {
  element: "div",
  size: "h1",
  color: "text-gray-800",
  classes: "",
};

Component.propTypes = {
  element: PropTypes.string,
  size: PropTypes.oneOf(["h1", "h2", "h3"]),
  color: PropTypes.string,
  classes: PropTypes.string,
  children: ChildrenData.isRequired,
};

export default Component;
