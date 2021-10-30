import React from "react";
import { useSelector } from "react-redux"; // to access state data, to dispatch data

const AccountsPage = () => {
  const getData = useSelector((state) => state.authenticationReducer.value);
  console.log(getData);

  return (
    <div className="mt-10 flex justify-center">
      <div className=" p-6 rounded-md tracking-wide shadow-lg">
        <div>
          <div id="header" className="flex items-center mb-4">
            <img
              alt="avatar"
              className="w-20 rounded-full border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="header-text" className="leading-5 ml-6 sm">
              <h4 id="name" className="text-xl font-semibold">
                Email - {getData.email}
              </h4>
            </div>
          </div>

          <div id="header" className="flex items-center mb-4">
            <img
              alt="avatar"
              className="w-20 rounded-full border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="header-text" className="leading-5 ml-6 sm">
              <h4 id="name" className="text-xl font-semibold">
                UID - {getData.uid}
              </h4>
            </div>
          </div>

          <div id="header" className="flex items-center mb-4">
            <img
              alt="avatar"
              className="w-20 rounded-full border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="header-text" className="leading-5 ml-6 sm">
              {getData.isAuthenticated === true ? (
                <h4 id="name" className="text-xl font-semibold">
                  Verified{" "}
                </h4>
              ) : (
                <h4 id="name" className="text-xl font-semibold">
                  Validate your email{" "}
                </h4>
              )}
            </div>
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

export default AccountsPage;
