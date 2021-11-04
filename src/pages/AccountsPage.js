import React from "react";
import { useSelector } from "react-redux"; // to access state data, to dispatch data
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const AccountsPage = () => {
  const getData = useSelector((state) => state.authenticationReducer.value);
  const avatarData = useSelector((state) => state.avatarReducer.value);
  // console.log(avatarData)

  return (
    <div className="mt-10 flex justify-center">
      <div className="p-10 w-1/2 mx-12 rounded-md tracking-wide shadow-lg ">
        <Avatar name={getData.email} size="100" round={true} />

        <div className="grid grid-cols-1 gap-4 mt-8 ">
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            <h4 id="name" className="text-lg font-semibold ">
              Avatar - {avatarData.avatarName}
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
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            <Link to="/forgetpassword">
              <h5 id="name" className=" text-lg font-semibold">
                Forget Password
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
