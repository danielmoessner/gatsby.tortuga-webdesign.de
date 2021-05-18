/* eslint-disable react/prop-types */

import CMS, { init } from "netlify-cms-app";
import { de } from "netlify-cms-locales";
import React from "react";
import Animal from "../components/Animal";
import AnimalCard from "../components/AnimalCard";
import Container from "../components/Container";
import "../styles/global.css";

// Localization
CMS.registerLocale("de", de);

/**
 * Optionally pass in a complete config object and set a flag
 *  (`load_config_file: false`) to ignore the `config.yml`.
 *
 * For example, the code below contains a complete config. The
 * `config.yml` will be ignored when setting `load_config_file` to false.
 * It is not required if the `config.yml` file is missing to set
 * `load_config_file`, but will improve performance and avoid a load error.
 */
init({
  config: {
    backend: {
      name: "git-gateway",
    },
    load_config_file: false,
    media_folder: "static/images/uploads",
    public_folder: "/images/uploads",
    collections: [
      {
        label: "Blog",
        name: "blog",
        folder: "_posts/blog",
        create: true,
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Publish Date", name: "date", widget: "datetime" },
          { label: "Featured Image", name: "thumbnail", widget: "image" },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
    ],
  },
});

// Previews
const AnimalPreview = ({ entry, widgetFor }) => {
  const animal = {
    title: entry.getIn(["data", "title"]),
    category: entry.getIn(["data", "category"]),
    excerpt: entry.getIn(["data", "excerpt"]),
  };
  return (
    <Container>
      <div className="pb-32 pt-5">
        <Animal preview animal={animal} image={widgetFor("image")} body={widgetFor("body")} />
        <hr className="bg-gray-600 my-10" />
        <div className="max-w-xs">
          <AnimalCard preview animal={animal} image={widgetFor("image")} />
        </div>
      </div>
    </Container>
  );
};
CMS.registerPreviewTemplate("animal", AnimalPreview);
