import React from "react";
import MathContent from "../data/MathContent";

const MathPage = () => {
  // console.log(MathContent[0].content);

  return (
    // Main Div
    <div>
      <div className="px-24 py-10 text-start">
        <span className="font-bold font-mono text-2xl">Math</span>{" "}
        {/* <span className="font-mono text-xl">
          {getData.avatarName}! {""} 👋
        </span>{" "} */}
      </div>

      <div className="flex flex-row px-24 gap-x-14">
        {MathContent.map((data) => (
          <div
            className="max-w-sm p-6 rounded-md tracking-wide shadow-lg bg-white"
            key={data.id}
          >
            <div id="header" className="flex items-center mb-4">
              <img
                alt="avatar"
                className="w-20 rounded-full border-2 border-gray-300"
                src="https://picsum.photos/seed/picsum/200"
              />
              <div id="header-text" className="leading-5 ml-6 sm">
                <h4 id="name" className="text-xl font-semibold">
                  {data.chapter}
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
        ))}
      </div>
    </div>
  );
};

export default MathPage;
