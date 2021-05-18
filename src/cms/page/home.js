import meta from "../symbols/meta";
import collection from "../symbols/collection";
import slug from "../symbols/slug";
import header from "../symbols/header";

export default {
  file: "content/page/home.yml",
  label: "Startseite",
  name: "home",
  fields: [collection("page"), slug("home"), meta, header],
};
