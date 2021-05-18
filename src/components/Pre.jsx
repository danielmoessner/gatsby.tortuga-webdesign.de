import React from "react";
import PropTypes from "prop-types";
import ChildrenData from "../types/ChildrenData";

function Component({ element, children, color }) {
  const Tag = element;

  return (
    <Tag className={`text-base font-semibold tracking-wider uppercase ${color}`}>{children}</Tag>
  );
}

Component.defaultProps = {
  element: "div",
  color: "text-gray-700",
};

Component.propTypes = {
  element: PropTypes.string,
  color: PropTypes.string,
  children: ChildrenData.isRequired,
};

export default Component;
