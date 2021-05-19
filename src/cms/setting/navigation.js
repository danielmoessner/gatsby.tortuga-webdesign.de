import slug from "../symbols/slug";
import collection from "../symbols/collection";

const linkFields = [
  {
    label: "Text",
    name: "text",
    type: "string",
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/",
  },
];

const link = {
  label: "Normales Item",
  name: "link",
  widget: "object",
  fields: linkFields,
  collapsed: false,
};

const links = {
  label: "Dropdown Item",
  name: "links",
  widget: "object",
  collapsed: false,
  fields: [
    {
      label: "Text",
      name: "text",
      widget: "string",
    },
    {
      label: "Links",
      name: "links",
      widget: "list",
      fields: linkFields,
    },
  ],
};

export default {
  file: "content/setting/navigation.yml",
  label: "Navigation",
  name: "navigation",
  preview: false,
  fields: [
    collection("setting"),
    slug("navigation"),
    {
      label: "Links",
      name: "links",
      widget: "list",
      collapsed: false,
      types: [link, links],
    },
  ],
};
