import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import GatsbyImageData from "../types/GatsbyImageData";

function Hero({ image, alt, preview }) {
  return (
    <section className="w-full">
      <div className="flex">
        {!preview ? (
          <GatsbyImage className="shadow rounded-lg mx-auto" image={image} alt={alt} />
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
  preview: PropTypes.bool,
  alt: PropTypes.string.isRequired,
  image: GatsbyImageData.isRequired,
};

export default Hero;
