import React from "react";
import PropTypes from "prop-types";
import Hero from "./Hero";
import GatsbyImageData from "../types/GatsbyImageData";
import Animate from "./Animate";

function Animal({ animal, image, body, preview }) {
  return (
    <div>
      <div className="mb-6">
        <Animate>
          <Hero image={image} preview={preview} alt={animal.title} />
        </Animate>
      </div>
      <div className="max-w-xl w-full mx-auto mb-3">
        <Animate delay={1}>
          <div className="text-gray-600 uppercase font-medium leading-tight tracking-tight -mb-2">
            {animal.category}
          </div>
        </Animate>
        <Animate delay={2}>
          <h2 className="text-5xl font-bold text-gray-800 tracking-tight leading-tight">
            {animal.title}
          </h2>
        </Animate>
      </div>
      <div className="max-w-xl w-full mx-auto mb-40">
        {!preview ? (
          <Animate delay={3}>
            <article
              className="prose-sm sm:prose lg:prose-xl"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </Animate>
        ) : (
          <article className="sm:prose lg:prose-xl prose-sm">{body}</article>
        )}
      </div>
    </div>
  );
}

Animal.defaultProps = {
  preview: false,
};

Animal.propTypes = {
  animal: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    excerpt: PropTypes.string,
  }).isRequired,
  body: PropTypes.string.isRequired,
  image: GatsbyImageData.isRequired,
  preview: PropTypes.bool,
};

export default Animal;
