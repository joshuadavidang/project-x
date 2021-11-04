import React, { useState } from "react";
// import Avatar from "react-avatar";
import AvatarSwiper from "../components/AvatarSwiper";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CONTENT_ACTION } from "../redux/reducers/content";
import BeatLoader from "react-spinners/BeatLoader";

const AccountsPage = () => {
  const [loading, setLoading] = useState(false);
  const getData = useSelector((state) => state.authenticationReducer.value);
  console.log(getData);

  const history = useHistory();
  const dispatch = useDispatch();

  const forgetPassword = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(CONTENT_ACTION({ isLoaded: false }));
      history.push("/forgetpassword");
    }, 600);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-10 w-auto rounded-md tracking-wide shadow-lg ">
        {/* <Avatar name={getData.email} size="100" round={true} /> */}
        <AvatarSwiper />

        <div className="grid grid-cols-1 gap-4 mt-2 ">
          <div className="bg-white-100 p-3 rounded-lg mb-2">
            <h4 id="name" className="text-lg font-semibold ">
              {getData.avatarName}
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            <h4 id="name" className="text-lg font-semibold ">
              Email - {getData.email}
            </h4>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            {getData.isAuthenticated === true ? (
              <h5 id="name" className=" text-lg font-semibold">
                Verified{" "}
              </h5>
            ) : (
              <h5 id="name" className=" text-lg font-semibold">
                Validate your email{" "}
              </h5>
            )}
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            {getData.uid === "" ? (
              <h5 id="name" className=" text-lg font-semibold">
                Please login to view your uuid
              </h5>
            ) : (
              <h5 id="name" className=" text-lg font-semibold">
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
