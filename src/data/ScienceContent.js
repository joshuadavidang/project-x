import { v4 as uuidv4 } from "uuid";

let ScienceContent = [
  {
    id: uuidv4(),
    subject: "Science",
    theme: "Diversity",
    themeOpener: [
      "Classification: Living and Non-Living Things",
      "Plants",
      "Animals",
      "Fungi and Bacteria",
      "Exploring Materials",
    ],
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "Science",
    theme: "Cycles",
    themeOpener: [
      "Life Cycles of Some Animals",
      "Life Cycle of Plants",
      "Matter",
    ],
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "Science",
    theme: "Systems",
    themeOpener: ["s1", "s2", "s3"],
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "Science",
    theme: "Interactions",
    themeOpener: ["i1", "i2", "i3"],
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "Science",
    theme: "Energy",
    themeOpener: ["e1", "e2", "e3"],
    updated: new Date().toDateString(),
  },
];

export default ScienceContent;
