/* eslint-disable react/prop-types */
import CMS, { init } from "netlify-cms-app";
import { de } from "netlify-cms-locales";
import React from "react";
import Animal from "../components/Animal";
import AnimalCard from "../components/AnimalCard";
import Container from "../components/Container";
import "../styles/global.css";
import page from "./page/index";
import animal from "./animal/index";
import category from "./category/index";
import setting from "./setting/index";
import legal from "./legal/index";

// See https://www.netlifycms.org/docs/configuration-options/#locale
CMS.registerLocale("de", de);

// See https://www.netlifycms.org/docs/beta-features/#manual-initialization
init({
  config: {
    publish_mode: "editorial_workflow",
    // See https://www.netlifycms.org/docs/configuration-options/#backend
    backend: {
      name: "git-gateway",
      branch: "main",
      repo: "danielmoessner/gatsby-netlifycms.tortuga-webdesign.de",
    },
    // See https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository
    local_backend: true,
    // See https://www.netlifycms.org/docs/configuration-options/#locale
    locale: "de",
    // See https://www.netlifycms.org/docs/configuration-options/#display-url
    display_url: "https://gatsby-netlifycms.tortuga-webdesign.de",
    // See https://www.netlifycms.org/docs/configuration-options/#site-url
    site_url: "https://gatsby-netlifycms.tortuga-webdesign.de",
    // See https://www.netlifycms.org/docs/configuration-options/#media-folder
    media_folder: "/content/media",
    // See https://www.netlifycms.org/docs/configuration-options/#public-folder
    public_folder: "../media",
    // See https://www.netlifycms.org/docs/beta-features/#manual-initialization
    load_config_file: false,
    // See https://www.netlifycms.org/docs/collection-types/
    collections: [page, animal, category, setting, legal],
  },
});

// Previews
const AnimalPreview = ({ entry, widgetFor }) => {
  const animalData = {
    title: entry.getIn(["data", "title"]),
    category: entry.getIn(["data", "category"]),
    excerpt: entry.getIn(["data", "excerpt"]),
  };
  return (
    <Container>
      <div className="pb-32 pt-5">
        <Animal preview animal={animalData} image={widgetFor("image")} body={widgetFor("body")} />
        <hr className="bg-gray-600 my-10" />
        <div className="max-w-xs">
          <AnimalCard preview animal={animalData} image={widgetFor("image")} />
        </div>
      </div>
    </Container>
  );
};
CMS.registerPreviewTemplate("animal", AnimalPreview);
