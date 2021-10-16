import React from "react";
import Lesson from "../assets/images/lesson.png";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-white-200 min-h-screen">
        <div className="grid grid-cols-2">
          <div className="justify-center flex items-center">
            <img src={Lesson} alt="lesson" width="60%" />
          </div>

          <div className="bg-gray-50">
            <div class="grid grid-rows-3 grid-flow-col justify-center flex items-center min-h-screen">
              <div className="bg-red-200 text-xl px-24 py-4 rounded-full py-3 px-6">
                <p className="text-center">English</p>
              </div>

              <div className="bg-red-200 text-xl px-24 py-4 rounded-full py-3 px-6">
                <p className="text-center">Math</p>
              </div>

              <div className="bg-red-200 text-xl px-24 py-4 rounded-full py-3 px-6">
                <p className="text-center">Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
