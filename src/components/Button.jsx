import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import ChildrenData from "../types/ChildrenData";

function Component({
  // element
  element,
  // attrs
  href,
  to,
  target,
  type,
  // style
  secondary,
  // size
  size,
  // color
  color,
  primaryColor,
  secondaryColor,
  // ring
  ring,
  ringOffset,
  // className
  className,
  // other
  children,
}) {
  const Tag = element === "Link" ? Link : element;

  let attrs = {};
  if (element === "Link") {
    attrs = {
      to,
    };
  } else if (element === "button") {
    attrs = {
      type,
    };
  } else if (element === "a") {
    attrs = {
      href,
      target,
    };
  }

  let bColor = "";
  if (secondary) {
    bColor = color || secondaryColor;
  } else {
    bColor = color || primaryColor;
  }

  const bClassName =
    className ||
    `inline-flex items-center border-2 border-transparent font-medium rounded-md shadow-sm ${ring} ${ringOffset} ${size} ${bColor}`;

  return (
    <Tag
      className={bClassName}
      // eslint-disable-next-line
      {...attrs}
    >
      {children}
    </Tag>
  );
}

Component.defaultProps = {
  // element
  element: "Link",
  // attrs
  to: "/",
  href: "#",
  type: "submit",
  target: "_self",
  // style
  secondary: false,
  // size
  size: "px-4 py-2 text-sm",
  // color
  color: null,
  primaryColor: "text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500",
  secondaryColor: "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500",
  // ring
  ring: "focus:outline-none focus:ring-2 focus:ring-offset-2",
  ringOffset: "ring-offset-pink-500",
  // className
  className: null,
};

Component.propTypes = {
  // element
  element: PropTypes.oneOf(["a", "button", "Link"]),
  // attrs
  href: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  // style
  // style: PropTypes.oneOf(["primary", "secondary"]),
  secondary: PropTypes.bool,
  // size
  size: PropTypes.string,
  // color
  color: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  // ring
  ring: PropTypes.string,
  ringOffset: PropTypes.string,
  // classname
  className: PropTypes.string,
  // other
  children: ChildrenData.isRequired,
};

export default Component;
