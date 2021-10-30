import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux"; // to access state data, to dispatch data
import { LOGOUT_ACTION } from "../redux/reducers/authentication";
import { CONTENT_ACTION } from "../redux/reducers/content";

const NavBar = ({ emailData }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [selectedEngBtnState, setSelectedEngBtnState] = useState(false);
  const [selectedMathBtnState, setSelectedMathBtnState] = useState(false);

  const EnglishBtn = () => {
    setSelectedEngBtnState(true);
    setSelectedMathBtnState(false);
    dispatch(CONTENT_ACTION({ subject: "English", isLoaded: true }));
  };

  const MathBtn = () => {
    setSelectedMathBtnState(true);
    setSelectedEngBtnState(false);
    dispatch(CONTENT_ACTION({ subject: "Math", isLoaded: true }));
  };

  const goToWelcomeBtn = () => {
    dispatch(CONTENT_ACTION({ isLoaded: false }));
  };

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
                email: emailData,
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
    <div>
      <ul className="flex flex-col overflow-hidden">
        <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col h-screen px-4 text-white rounded-r-3xl">
          <div className="flex justify-center m-8">
            <Avatar name={emailData} size="100" round={true} />
          </div>

          <div className="text-center">
            <span onClick={goToWelcomeBtn}>{emailData}</span>{" "}
          </div>

          <div className="mt-8 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span onClick={goToWelcomeBtn}>Home</span>{" "}
          </div>

          <div className="m-2 cursor-pointer">
            <ul>
              {/* eslint-disable-next-line */}
              {selectedEngBtnState == true && selectedMathBtnState == false ? (
                <li
                  className="text-center py-2 border-r-8"
                  onClick={EnglishBtn}
                >
                  <span>English</span>
                </li>
              ) : (
                <li className="text-center py-2 " onClick={EnglishBtn}>
                  <span>English</span>
                </li>
              )}
              {/* eslint-disable-next-line */}
              {selectedMathBtnState == true && selectedEngBtnState == false ? (
                <li className="text-center py-2 border-r-8" onClick={MathBtn}>
                  <span>Math</span>
                </li>
              ) : (
                <li className="text-center py-2 " onClick={MathBtn}>
                  <span>Math</span>
                </li>
              )}
            </ul>

            <button
              onClick={signOutBtn}
              type="button"
              className="bg-gradient-to-r from-blue-600 to-blue-500 
                hover:from-red-500 hover:to-yellow-500 text-white w-full rounded-lg 
                text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mt-12"
            >
              <li className="text-center py-3 ">
                <span>Log Out</span>
              </li>
            </button>
          </div>
        </nav>
      </ul>
    </div>
  );
};

export default NavBar;
