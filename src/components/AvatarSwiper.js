import React from "react";
import Avatar, { genConfig } from "react-nice-avatar";

const config = genConfig();

const AvatarSwiper = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Avatar style={{ width: "8rem", height: "8rem" }} {...config} />
      </div>
    </div>
  );
};

export default AvatarSwiper;
