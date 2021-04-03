import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Transition } from '@headlessui/react';

function Animate({ children }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        // if (entry.isIntersecting && isLoaded) obs.disconnect();
      }
      // {
      //   threshold: 0.01,
      //   rootMargin: '0px 0px -10% 0px',
      // }
    );
    if (ref.current) observer.observe(ref.current);

    // const setIsLoadedTrue = () => setIsLoaded(true);
    // eslint-disable-next-line no-undef
    // if (!isLoaded) document.addEventListener('scroll', setIsLoadedTrue);
    // eslint-disable-next-line no-undef
    // else document.removeEventListener('scroll', setIsLoadedTrue);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      <Transition
        show={isIntersecting}
        enter="transform transition duration-1000 ease-in-out"
        enterFrom="opacity-0 translate-y-64"
        enterTo="opacity-100 translate-y-0"
        unmount={false}
        style={{ display: 'block' }}
        className="transition-animate"
      >
        {children}
      </Transition>
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
