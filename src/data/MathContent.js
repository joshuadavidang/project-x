import { v4 as uuidv4 } from "uuid";

let MathContent = [
  {
    id: uuidv4(),
    subject: "Math",
    chapter: "Algebra",
    content: ["a2+b2=c2", "b2+b2=cd2"],
    updated: new Date().toDateString(),
  },
  {
    id: uuidv4(),
    subject: "Math",
    chapter: "Decimals",
    updated: new Date().toDateString(),
  },
];

export default MathContent;
