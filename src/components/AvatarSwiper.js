import React from "react";
import SignUp from "../assets/images/signup.svg";

const AvatarSwiper = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={SignUp} alt="sign up" className="mb-3 w-3/5" />
      </div>
    </div>
  );
};

export default AvatarSwiper;
