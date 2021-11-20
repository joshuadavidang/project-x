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
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "Science",
    theme: "Interactions",
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "Science",
    theme: "Energy",
    updated: new Date().toDateString(),
  },
];

export default ScienceContent;
