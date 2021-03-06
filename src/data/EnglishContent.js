import { v4 as uuidv4 } from "uuid";

let EnglishContent = [
  {
    id: uuidv4(),
    subject: "English",
    chapter: "Grammar",
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "English",
    chapter: "Verbs",
    updated: new Date().toDateString(),
  },
];

export default EnglishContent;
