import React from "react";

const MainContent = () => {
  return (
    <div>
      <div className="mt-3">
        <span className="font-bold">English</span>
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
