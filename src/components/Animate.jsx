import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ChildrenData from "../types/ChildrenData";

function Animate({ children, className, delay, duration, from, to }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  let transitionDelay = "delay-0";
  if (delay === 1) transitionDelay = "delay-100";
  if (delay === 2) transitionDelay = "delay-200";
  if (delay === 3) transitionDelay = "delay-300";

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          setShow(true);
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -10% 0px",
      }
    );
    if (ref.current) observer.observe(ref.current);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transform transition ease-in-out 
        ${duration} 
        ${transitionDelay} 
        ${className} 
        ${show ? to : from}
        `}
    >
      {children}
    </div>
  );
}

Animate.defaultProps = {
  className: "",
  delay: 0,
  duration: "duration-500",
  from: "opacity-0 translate-y-10",
  to: "opacity-100 translate-y-0",
};

Animate.propTypes = {
  children: ChildrenData.isRequired,
  className: PropTypes.string,
  delay: PropTypes.oneOf([0, 1, 2, 3]),
  from: PropTypes.string,
  to: PropTypes.string,
  duration: PropTypes.string,
};

export default Animate;
