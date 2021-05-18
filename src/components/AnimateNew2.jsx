import React from "react";
import PropTypes from "prop-types";

function Animate({ children }) {
  return (
    <div data-sal="slide-up" data-sal-easing="ease" style={{ "--sal-duration": "500ms" }}>
      {children}
    </div>
  );
}

Animate.defaultProps = {
  // animateClass: 'animate__fadeInUp',
};

Animate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Animate;
