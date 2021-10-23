import React from "react";
// import Joshua from "../assets/images/joshua.jpeg";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Avatar from "react-avatar";

import { useSelector, useDispatch } from "react-redux"; // to access state data, to dispatch data
import { LOGOUT_ACTION } from "../redux/reducers/authentication";

const LandingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.authenticationReducer.value);
  // console.log(getData.email);

  const signOutBtn = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Logout?",
          text: "You will be signed out",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("", "Logout successful", "success");
            // Sign-out successful.
            dispatch(
              LOGOUT_ACTION({
                email: getData.email,
                isAuthenticated: false,
                message: "User signed out",
              })
            );
            history.push("/");
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire("Welcome back", "", "success");
          }
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="">
        <div className="flex flex-row flex-wrap">
          <aside className="w-full sm:w-1/4 md:w-2/6 xl:w-1/6 bg-gray-200">
            <div>
              <ul className="flex flex-col overflow-hidden">
                <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col h-screen px-4 text-white rounded-r-3xl">
                  <div className="flex justify-center m-8">
                    {/* <img
                      src={Joshua}
                      alt="profilePicture"
                      className=" w-20 h-20 rounded-full"
                    /> */}

                    <Avatar name={getData.email} size="100" round={true} />
                  </div>

                  <div className="text-center">
                    <span>{getData.email}</span>
                  </div>

                  <div className="m-2 cursor-pointer">
                    <ul onClick={() => alert("Under Construction")}>
                      <li className="text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg">
                        <span>English</span>
                      </li>
                    </ul>

                    <ul onClick={() => alert("Under Construction")}>
                      <li className="text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg">
                        <span>Math</span>
                      </li>
                    </ul>

                    <ul onClick={() => alert("Under Construction")}>
                      <li className="text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg">
                        <span>Science</span>
                      </li>
                    </ul>

                    <ul
                      onClick={signOutBtn}
                      className="rounded-full bg-red-700 text-white text-sm m-8 hover:bg-red-900 "
                    >
                      <li className="text-center py-3">
                        <span>Log Out</span>
                      </li>
                    </ul>
                  </div>
                </nav>
              </ul>
            </div>
          </aside>

          <main
            role="main"
            className="w-full sm:w-3/4 md:w-4/6 xl:w-5/6 text-center bg-gray-200"
          >
            <div className="mt-3">
              <span className="font-bold">English</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mx-10 my-14">
              <div className="shadow bg-white rounded-lg ml-4">a</div>
              <div className="shadow bg-white w-full rounded-lg  ml-4">b</div>

              <div className="shadow bg-white w-full rounded-lg ml-4">c</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
