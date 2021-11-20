import React from "react";
import { useParams } from "react-router-dom";
import ScienceContent from "../../data/ScienceContent";

const DetailedContentPage = () => {
  let params = useParams();
  // console.log(ScienceContent);
  // console.log(params);

  let toSearch = params.themeId; // Diversity
  let result = ScienceContent.filter((o) => o.theme.includes(toSearch));
  console.log(result[0].themeOpener);

  return (
    <div>
      <div className="px-24 py-10 text-start">
        {/* <span className="font-bold font-mono text-2xl text-center bg-black p-6 rounded-3xl"> */}
        <span
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                text-white w-1/3 py-3 rounded-2xl text-lg shadow-sm font-semibold text-center inline-block font-mono"
        >
          {params.themeId}
        </span>{" "}
      </div>

      {result[0].themeOpener.map((data) => (
        <div className="flex flex-row">
          {/* <div className="">
            {" "}
            <img src={Lesson} className="w-1/5 pl-12" alt="img" />
          </div> */}

          <div className="cursor-pointer">
            <p
              id="name"
              className="text-4xl text-start ml-24 font-semibold font-sans leading-loose tracking-wider"
            >
              {data}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedContentPage;
