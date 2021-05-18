import collection from "../symbols/collection";

export default {
  name: "category",
  label: "Kategorien",
  label_singular: "Kategorie",
  extension: "yml",
  editor: {
    preview: false,
  },
  folder: "content/category",
  slug: "{{slug}}",
  create: true,
  fields: [collection("category"), { label: "Titel", name: "title", widget: "string" }],
};
