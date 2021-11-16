import React, { useState } from "react";
import ScienceChapter from "../data/ScienceChapter";
import Diversity from "./Science/Diversity";
// import ScienceContent from "../data/ScienceContent";

const SciencePage = () => {
  const [scienceBtn, setScienceBtn] = useState(false);

  console.log(ScienceChapter);

  const scienceThemeBtn = (data) => {
    console.log(data.theme);
    setScienceBtn(true);
  };

  return (
    // Main Div
    <div>
      <div className="px-24 py-10 text-start">
        <span className="font-bold font-mono text-2xl">Theme</span>{" "}
        {/* <span className="font-mono text-xl">
          {getData.avatarName}! {""} 👋
        </span>{" "} */}
      </div>

      <div className="flex flex-row flex-wrap px-24 gap-x-14 gap-y-10 cursor-pointer font-mono">
        {/* {scienceBtn === true ? <Diversity /> : null} */}

        {ScienceChapter.map((data) => (
          <div
            className="w-3/12 p-12 rounded-md shadow-lg bg-white "
            onClick={() => scienceThemeBtn(data)}
            key={data.id}
          >
            <div className="flex justify-center">
              <p id="name" className="text-lg font-semibold">
                {data.theme}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SciencePage;
