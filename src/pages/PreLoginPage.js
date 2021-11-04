import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const PreLoginPage = () => {
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  let history = useHistory();

  const playBtn = () => {
    setLoadingAnimation(true);
    setTimeout(() => {
      setLoadingAnimation(false);
      history.push("/loginpage");
    }, 800);
  };

  return (
    <div className="bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen flex items-center justify-center">
      <div className="p-10 ">
        <div className="flex justify-center">
          <p className="text-5xl text-pink-100 font-mono">Mission Possible</p>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={playBtn}
            type="button"
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                hover:from-pink-500 hover:to-yellow-500 text-white w-full py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            {loadingAnimation === true ? (
              <PulseLoader size={7} color={"white"} />
            ) : (
              <span className="font-mono tracking-widest">PLAY</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreLoginPage;
