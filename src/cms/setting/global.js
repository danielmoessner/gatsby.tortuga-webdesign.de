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
    { label: "Favicon", name: "favicon", widget: "image" },
    { label: "Tortuga Webdesign Logo", name: "tortugaWebdesignLogo", widget: "text" },
  ],
};
