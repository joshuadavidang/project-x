import React from "react";
import ScienceChapter from "../../data/ScienceChapter";

const Diversity = () => {
  let displayData = ScienceChapter[0].themeOpener;
  console.log(displayData);

  return (
    <div>
      {displayData.map((data) => (
        <div className="h-5/6">{data}</div>
      ))}
    </div>
  );
};

export default Diversity;
