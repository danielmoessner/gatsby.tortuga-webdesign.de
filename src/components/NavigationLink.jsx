import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// import { Transition } from '@headlessui/react';

function Component({ link }) {
  return (
    <>
      <Link
        to={link.url}
        className="px-3 py-1 hover:bg-gray-100 rounded-md hidden text-base font-medium text-gray-500 hover:text-gray-900 md:block"
      >
        {link.text}
      </Link>
      <div className="md:hidden">
        <Link to={link.url} className="text-base font-medium text-gray-900 hover:text-gray-700">
          {link.text}
        </Link>
      </div>
    </>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Component;
