import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import GatsbyImageData from '../types/GatsbyImageData';

function AnimalCard({ animal, image, preview }) {
  return (
    <div>
      <div className="shadow rounded-lg">
        <Link
          className={!preview ? 'block aspect-w-16 aspect-h-10' : ''}
          to={`wildtiere/${animal.slug}`}
        >
          {!preview ? (
            <GatsbyImage className="rounded-lg" image={image} alt={animal.title} />
          ) : (
            <div className="rounded-lg overflow-hidden">{image}</div>
          )}
        </Link>
      </div>
      <div className="px-2 pt-4 flex flex-col justify-start items-start">
        <Link className="mb-2" to={`wildtiere/${animal.slug}`}>
          <div className="text-gray-600 text-xs uppercase font-medium mb-0 leading-tight tracking-tight">
            {animal.category}
          </div>
          <h2 className="text-2xl text-gray-800 font-bold tracking-tight leading-tight">
            {animal.title}
          </h2>
        </Link>
        <Link to={`wildtiere/${animal.slug}`}>
          <p className="text-sm leading-tight text-gray-900 line-clamp-3">{animal.excerpt}</p>
        </Link>
      </div>
    </div>
  );
}

AnimalCard.defaultProps = {
  preview: false,
};

AnimalCard.propTypes = {
  animal: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    category: PropTypes.string,
    excerpt: PropTypes.string,
  }).isRequired,
  image: GatsbyImageData.isRequired,
  preview: PropTypes.bool,
};

export default AnimalCard;
