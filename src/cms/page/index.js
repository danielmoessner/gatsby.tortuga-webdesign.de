import home from "./home";
import styleguide from "./styleguide";

export default {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false,
  },
  files: [home, styleguide],
};
