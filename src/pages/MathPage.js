import React from "react";

const MathPage = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="max-w-sm p-6 rounded-md tracking-wide shadow-lg">
        <div id="header" className="flex items-center mb-4">
          <img
            alt="avatar"
            className="w-20 rounded-full border-2 border-gray-300"
            src="https://picsum.photos/seed/picsum/200"
          />
          <div id="header-text" className="leading-5 ml-6 sm">
            <h4 id="name" className="text-xl font-semibold">
              Math
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

export default MathPage;
