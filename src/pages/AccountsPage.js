import React, { useState } from "react";
// import Avatar from "react-avatar";
import AvatarSwiper from "../components/AvatarSwiper";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CONTENT_ACTION } from "../redux/reducers/content";
import BeatLoader from "react-spinners/BeatLoader";

const AccountsPage = () => {
  const [loading, setLoading] = useState(false);
  const getData = useSelector((state) => state.authenticationReducer.value);
  console.log(getData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const forgetPassword = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(CONTENT_ACTION({ isLoaded: false }));
      navigate("/forgetpassword");
    }, 600);
  };

  return (
    <div className="mt-12 p-12 w-1/2">
      <div className="p-10 w-auto rounded-md tracking-wide shadow-lg">
        {/* <Avatar name={getData.email} size="100" round={true} /> */}
        <AvatarSwiper />

        <div className="grid grid-cols-1 gap-4 ">
          <div className="bg-white-100 p-3 rounded-lg mb-2">
            <h4 id="name" className="text-sm font-semibold ">
              {getData.avatarName} - {getData.avatar}
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            <h4 id="name" className="text-sm font-semibold ">
              {getData.email}
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            {getData.uid === "" ? (
              <h5 id="name" className=" text-sm font-semibold">
                Please login to view your uuid
              </h5>
            ) : (
              <h5 id="name" className=" text-sm font-semibold">
                {getData.uid}{" "}
              </h5>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={forgetPassword}
            type="button"
            id="name"
            className=" text-sm font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                hover:from-pink-500 hover:to-yellow-500 text-white w-full py-3 rounded-lg  font-mono tracking-wide"
          >
            {loading === true ? <BeatLoader size={7} /> : " Change Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
