import { v4 as uuidv4 } from "uuid";

let ScienceContent = [
  {
    id: uuidv4(),
    subject: "Science",
    chapter: "Life Cycle",
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "Science",
    chapter: "Fungi",
    updated: new Date().toDateString(),
  },
];

export default ScienceContent;
