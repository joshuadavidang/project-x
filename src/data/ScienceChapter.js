import { v4 as uuidv4 } from "uuid";

let ScienceChapter = [
  {
    id: uuidv4(),
    subject: "Science",
    theme: "Diversity",
    themeOpener: [
      "Classification: Living and non-living things",
      "Plants",
      "Animals",
    ],
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "Science",
    theme: "Cycles",
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

export default ScienceChapter;
