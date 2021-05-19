import slug from "../symbols/slug";
import collection from "../symbols/collection";

export default {
  file: "content/setting/global.yml",
  label: "Global",
  name: "global",
  preview: false,
  fields: [
    collection("setting"),
    slug("global"),
    {
      label: "Titel in der Navigation",
      name: "navigationTitle",
      widget: "string",
      default: "Wildtiere",
    },
    { label: "URL der Seite", name: "siteUrl", widget: "string", required: false },
    { label: "Favicon", name: "favicon", widget: "image" },
  ],
};
