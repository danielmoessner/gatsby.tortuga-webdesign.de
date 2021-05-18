import meta from "../symbols/meta";
import collection from "../symbols/collection";
import slug from "../symbols/slug";

export default {
  file: "content/page/styleguide.yml",
  label: "Styleguide",
  name: "styleguide",
  fields: [collection("page"), slug("styleguide"), meta],
};
