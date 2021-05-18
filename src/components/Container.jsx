import React from "react";
import PropTypes from "prop-types";
import ChildrenData from "../types/ChildrenData";

function Container({ children, layout }) {
  let maxWidth = "";
  if (layout === "sm") {
    maxWidth = "max-w-6xl";
  } else if (layout === "md") {
    maxWidth = "max-w-7xl";
  } else if (layout === "lg") {
    maxWidth = "max-w-8xl";
  }
  return <div className={`${maxWidth} mx-auto px-3 sm:px-6 lg:px-8`}>{children}</div>;
}

Container.defaultProps = {
  layout: "md",
};

Container.propTypes = {
  children: ChildrenData.isRequired,
  layout: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Container;
