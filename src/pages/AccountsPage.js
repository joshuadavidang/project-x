import React from "react";
import { useSelector } from "react-redux"; // to access state data, to dispatch data
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const AccountsPage = () => {
  const getData = useSelector((state) => state.authenticationReducer.value);
  console.log(getData);

  return (
    // <div className="mt-10 flex justify-center">
    //   <div className=" p-6 rounded-md tracking-wide shadow-lg">
    //     <div>
    //       <div id="header" className="flex items-center mb-4">
    //         <Avatar name={getData.email} size="100" round={true} />
    //         <div id="header-text" className="leading-5 ml-6 sm">
    //           <h4 id="name" className="text-xl font-semibold">
    //             Email - {getData.email}
    //           </h4>
    //         </div>
    //       </div>

    //       <div id="header" className="flex items-center mb-4">
    //         <img
    //           alt="avatar"
    //           className="w-20 rounded-full border-2 border-gray-300"
    //           src="https://picsum.photos/seed/picsum/200"
    //         />
    //         <div id="header-text" className="leading-5 ml-6 sm">
    //           <h4 id="name" className="text-xl font-semibold">
    //             UID - {getData.uid}
    //           </h4>
    //         </div>
    //       </div>

    //       <div id="header" className="flex items-center mb-4">
    //         <img
    //           alt="avatar"
    //           className="w-20 rounded-full border-2 border-gray-300"
    //           src="https://picsum.photos/seed/picsum/200"
    //         />
    //         <div id="header-text" className="leading-5 ml-6 sm">
    //           {getData.isAuthenticated === true ? (
    //             <h4 id="name" className="text-xl font-semibold">
    //               Verified{" "}
    //             </h4>
    //           ) : (
    //             <h4 id="name" className="text-xl font-semibold">
    //               Validate your email{" "}
    //             </h4>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //     <div id="quote">
    //       <q className="italic text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //       </q>
    //     </div>
    //   </div>
    // </div>

    <div className="mt-10 flex justify-center">
      <div className="p-10 w-1/2 mx-12 rounded-md tracking-wide shadow-lg ">
        <Avatar name={getData.email} size="100" round={true} />

        <div class="grid grid-cols-1 gap-4 mt-8 ">
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            <h4 id="name" className="text-lg font-semibold ">
              Email - {getData.email}
            </h4>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4">
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
        </div>

        <div class="grid grid-cols-1 gap-4">
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            <h5 id="name" className=" text-lg font-semibold">
              {getData.uid}
            </h5>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4">
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
