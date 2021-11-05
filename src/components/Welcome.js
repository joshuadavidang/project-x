import React from "react";
import AvatarSwiper from "./AvatarSwiper";
// import SearchBar from "./SearchBar";

const Welcome = () => {
  return (
    <div className=" h-screen flex justify-center items-center ">
      <div className="max-w-sm p-6 rounded-md tracking-wide shadow-lg">
        <div id="header" className="flex items-center mb-4">
          <AvatarSwiper />
          <div id="header-text" className="leading-5 ml-6 sm">
            <h4 id="name" className="text-xl font-semibold">
              INVENTORY
            </h4>
          </div>
        </div>
        <div id="quote">
          <q className="italic text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
