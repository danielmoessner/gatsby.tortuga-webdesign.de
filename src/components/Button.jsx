import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ChildrenData from '../types/ChildrenData';

function Component({
  element,
  href,
  to,
  target,
  children,
  type,
  importance,
  ringOffsetClass,
  size,
  colors,
}) {
  const Tag = element === 'Link' ? Link : element;

  let attrs = {};
  if (element === 'Link') {
    attrs = {
      to,
    };
  } else if (element === 'button') {
    attrs = {
      type,
    };
  } else if (element === 'a') {
    attrs = {
      href,
      target,
    };
  }

  let classes =
    'inline-flex items-center border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  let colorClasses = ringOffsetClass;
  if (importance === 'primary') {
    classes = `${classes} shadow-sm`;
    colorClasses = `${colorClasses} shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500`;
  } else if (importance === 'secondary') {
    colorClasses = `${colorClasses} text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500`;
  }
  colorClasses = colors || colorClasses;

  classes = `${classes} ${size} ${colorClasses}`;

  return (
    <Tag
      className={classes}
      // eslint-disable-next-line
      {...attrs}
    >
      {children}
    </Tag>
  );
}

Component.defaultProps = {
  element: 'Link',
  to: '/',
  href: '#',
  type: 'submit',
  target: '_self',
  importance: 'primary',
  ringOffsetClass: '',
  size: 'px-4 py-2 text-sm',
  colors: '',
};

Component.propTypes = {
  element: PropTypes.oneOf(['a', 'button', 'Link']),
  href: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  children: ChildrenData.isRequired,
  importance: PropTypes.oneOf(['primary', 'secondary']),
  ringOffsetClass: PropTypes.string,
  size: PropTypes.string,
  colors: PropTypes.string,
};

export default Component;
