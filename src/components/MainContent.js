import React, { useEffect } from "react";
import EnglishContent from "./EnglishContent";
import SearchBar from "./SearchBar";

const MainContent = () => {
  useEffect(() => {
    console.log(EnglishContent);
  });
  return (
    <div>
      <div className="mt-5 flex justify-center">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <span className="text-2xl font-bold ">English</span>
          </div>
          <div class="...">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-10 my-14 ">
        <div className="max-w-sm p-6 rounded-md tracking-wide shadow-lg">
          <div id="header" className="flex items-center mb-4">
            <img
              alt="avatar"
              className="w-20 rounded-full border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="header-text" className="leading-5 ml-6 sm">
              <h4 id="name" className="text-xl font-semibold">
                John Doe
              </h4>
              <h5 id="job" className="font-semibold text-blue-600">
                Designer
              </h5>
            </div>
          </div>
          <div id="quote">
            <q className="italic text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q>
          </div>
        </div>

        <div className="max-w-sm p-6 rounded-md tracking-wide shadow-lg">
          <div id="header" className="flex items-center mb-4">
            <img
              alt="avatar"
              className="w-20 rounded-full border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="header-text" className="leading-5 ml-6 sm">
              <h4 id="name" className="text-xl font-semibold">
                John Doe
              </h4>
              <h5 id="job" className="font-semibold text-blue-600">
                Designer
              </h5>
            </div>
          </div>
          <div id="quote">
            <q className="italic text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q>
          </div>
        </div>

        <div className="max-w-sm bg-white p-6 rounded-md tracking-wide shadow-lg">
          <div id="header" className="flex items-center mb-4">
            <img
              alt="avatar"
              className="w-20 rounded-full border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="header-text" className="leading-5 ml-6 sm">
              <h4 id="name" className="text-xl font-semibold">
                John Doe
              </h4>
              <h5 id="job" className="font-semibold text-blue-600">
                Designer
              </h5>
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
    </div>
  );
};

export default MainContent;
