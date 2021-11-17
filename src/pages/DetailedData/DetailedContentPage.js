import React from "react";
import { useParams } from "react-router-dom";
import ScienceContent from "../../data/ScienceContent";

const DetailedContentPage = () => {
  let params = useParams();

  console.log(ScienceContent);
  console.log(params);

  let toSearch = params.themeId; // Diversity
  let result = ScienceContent.filter((o) => o.theme.includes(toSearch));
  console.log(result[0].themeOpener);

  return (
    <div>
      <div>DETAILED PAGE: {params.themeId}</div>

      {result[0].themeOpener.map((data) => (
        <div className="flex justify-center">
          <p id="name" className="text-lg font-semibold">
            {data}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DetailedContentPage;
