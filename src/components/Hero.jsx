import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import ImageFluid from '../types/ImageFluid';

function Hero({ image, alt, preview }) {
  return (
    <section className="w-full">
      <div className="">
        {!preview ? (
          <GatsbyImage className="shadow rounded-lg" image={image} alt={alt} />
        ) : (
          <div className="rounded-lg overflow-hidden">{image}</div>
        )}
      </div>
    </section>
  );
}

Hero.defaultProps = {
  preview: false,
};

Hero.propTypes = {
  image: ImageFluid.isRequired,
  preview: PropTypes.bool,
  alt: PropTypes.string.isRequired,
};

export default Hero;
