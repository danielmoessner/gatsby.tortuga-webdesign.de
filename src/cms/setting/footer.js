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
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields,
  collapsed: false,
};

const text = {
  label: "Text",
  name: "text",
  widget: "object",
  fields: [{ label: "Text", name: "text", widget: "text" }],
};

const externalLinkFields = [
  {
    label: "Text",
    name: "text",
    type: "string",
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL sollte nicht auf die selbe Seite zeigen, kann aber alles enthalten. Beispiele: mailto:kontakt@tortuga-webdesign.de oder https://tortuga-webdesign.de/referenzen/",
  },
];

const externalLink = {
  label: "Externer Link",
  name: "externalLink",
  widget: "object",
  fields: externalLinkFields,
  collapsed: false,
};

export default {
  file: "content/setting/footer.yml",
  label: "Footer",
  name: "footer",
  preview: false,
  fields: [
    collection("setting"),
    slug("footer"),
    { label: "Copyright", name: "copyright", widget: "string" },
    { label: "Text", name: "text", widget: "text" },
    {
      label: "Spalten",
      name: "columns",
      widget: "list",
      collapsed: false,
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        {
          label: "Class (Experte)",
          name: "class",
          widget: "string",
          default: "col-span-6 md:col-span-3",
        },
        { label: "Inhalt", name: "content", widget: "list", types: [link, externalLink, text] },
      ],
    },
  ],
};
