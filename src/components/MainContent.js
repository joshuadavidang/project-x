import React, { useEffect } from "react";
import EnglishContent from "./EnglishContent";

const MainContent = () => {
  useEffect(() => {
    console.log(EnglishContent);
  });
  return (
    <div>
      <div className="mt-5">
        <span className="text-2xl font-bold">English</span>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-10 my-14">
        <div className="shadow bg-white rounded-lg ml-4">a</div>
        <div className="shadow bg-white w-full rounded-lg  ml-4">b</div>
        <div className="shadow bg-white w-full rounded-lg ml-4">c</div>
      </div>
    </div>
  );
};

export default MainContent;
