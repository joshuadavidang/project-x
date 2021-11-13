import { v4 as uuidv4 } from "uuid";

let EnglishContent = [
  {
    id: uuidv4(),
    subject: "English",
    chapter: 1,
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "English",
    chapter: 2,
    updated: new Date().toDateString(),
  },
];

export default EnglishContent;
