import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Animate({ animateClass, children }) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        setIsIntersecting(entry.isIntersecting);
        if (isIntersecting) obs.disconnect();
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px -200px 0px',
      }
    );
    if (ref.current) observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [isIntersecting]);

  return (
    <div ref={ref}>
      <div
        className={isIntersecting ? `animate__animated animate__fast ${animateClass}` : 'opacity-0'}
      >
        {children}
      </div>
    </div>
  );
}

Animate.defaultProps = {
  animateClass: 'animate__fadeInUp',
};

Animate.propTypes = {
  children: PropTypes.element.isRequired,
  animateClass: PropTypes.string,
};

export default Animate;
