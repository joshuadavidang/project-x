import React from "react";
import ScienceContent from "../data/ScienceContent";
import { useNavigate } from "react-router";

const SciencePage = () => {
  const navigate = useNavigate();

  const getDetailsBtn = (data) => {
    // console.log(data.themeOpener);
    navigate(`/sciencepage/${data.theme}`);
  };

  return (
    // Main Div
    <div>
      <div className="px-24 py-10 text-start">
        <span className="font-bold font-mono text-2xl">Theme</span>{" "}
      </div>

      <div className="flex flex-row flex-wrap px-24 gap-x-14 gap-y-10 cursor-pointer font-mono">
        {ScienceContent.map((data) => (
          <div
            className="w-3/12 p-16 rounded-md shadow-lg bg-white"
            onClick={() => getDetailsBtn(data)}
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
