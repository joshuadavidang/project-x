import React, { useState } from "react";
// import { getAuth, signOut } from "firebase/auth";
// import { useHistory } from "react-router-dom";
// import Swal from "sweetalert2";
// import Avatar from "react-avatar";
import { useDispatch  } from "react-redux"; // to access state data, to dispatch data
// import { LOGOUT_ACTION } from "../redux/reducers/authentication";
import { CONTENT_ACTION } from "../redux/reducers/content";
import AvatarSwiper from "./AvatarSwiper";

const NavBar = ({ emailData }) => {
  // const history = useHistory();
  const dispatch = useDispatch();
  // const contentData = useSelector((state) => state.contentReducer.value);

  const [selectedEngBtnState, setSelectedEngBtnState] = useState(false);
  const [selectedMathBtnState, setSelectedMathBtnState] = useState(false);
  // const [selectedHomeState, setSelectedHomeState] = useState(true);
  // const [selectedAccState, setSelectedAccState] = useState(false);

  const EnglishBtn = () => {
    setSelectedEngBtnState(true);
    setSelectedMathBtnState(false);
    // setSelectedHomeState(false);
    // setSelectedAccState(false);
    dispatch(CONTENT_ACTION({ subject: "English", isLoaded: true }));
  };

  const MathBtn = () => {
    setSelectedMathBtnState(true);
    setSelectedEngBtnState(false);
    // setSelectedAccState(false);
    // setSelectedHomeState(false);
    dispatch(CONTENT_ACTION({ subject: "Math", isLoaded: true }));
  };

  // const goToAccounts = () => {
  //   setSelectedAccState(true);
  //   setSelectedHomeState(false);
  //   setSelectedEngBtnState(false);
  //   setSelectedMathBtnState(false);
  //   dispatch(CONTENT_ACTION({ subject: "Account", isLoaded: true }));
  // };

  // const goToWelcomeBtn = () => {
  //   setSelectedHomeState(true);
  //   setSelectedAccState(false);
  //   setSelectedEngBtnState(false);
  //   setSelectedMathBtnState(false);
  //   dispatch(CONTENT_ACTION({ isLoaded: false }));
  // };

  // const signOutBtn = () => {
  //   const auth = getAuth();
  //   signOut(auth)
  //     .then(() => {
  //       Swal.fire({
  //         title: "Logout?",
  //         text: "You will be signed out",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonText: "Yes",
  //         cancelButtonText: "No",
  //         reverseButtons: true,
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           Swal.fire("", "Logout successful", "success");
  //           // Sign-out successful.
  //           dispatch(
  //             LOGOUT_ACTION({
  //               email: emailData,
  //               isAuthenticated: false,
  //               message: "User signed out",
  //             })
  //           );
  //           dispatch(CONTENT_ACTION({ isLoaded: false }));
  //           history.push("/");
  //         } else if (result.dismiss === Swal.DismissReason.cancel) {
  //           Swal.fire("Welcome back", "", "success");
  //         }
  //       });
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };

  return (
    <div>
      <ul className="flex flex-col overflow-hidden">
        <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col h-screen px-4 text-white rounded-r-3xl ">
          <div className="flex justify-center m-8">
            {/* <Avatar name={emailData} size="100" round={true} /> */}
            <AvatarSwiper />
          </div>
          <div className="text-center mb-8">
            <span className="font-mono">{emailData}</span>{" "}
          </div>

          {/* ********* Home Icon ********* */}
          {/* <div className="flex justify-center">
        
            <li
              className={
                selectedHomeState === true
                  ? "text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2 "
                  : "text-center py-2 w-72  flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2"
              }
              onClick={goToWelcomeBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

              <span>Home</span>
            </li>
          </div> */}

          {/* ********* English Icon ********* */}
          <div className="flex justify-center">
            <li
              className={
                selectedEngBtnState === true && selectedMathBtnState === false
                  ? // contentData.isLoaded === true
                    "text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2"
                  : "text-center py-2 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2"
              }
              onClick={EnglishBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>

              <span className="font-mono">English</span>
            </li>
          </div>
          {/* ********* Math Icon ********* */}
          {/* eslint-disable-next-line */}
          <div className="flex justify-center">
            <li
              className={
                selectedMathBtnState === true && selectedEngBtnState === false
                  ? "text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2"
                  : "text-center py-2 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2"
              }
              onClick={MathBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <span className="font-mono">Math</span>
            </li>
          </div>

          {/* ********* Account Icon ********* */}
          {/* <div className="flex justify-center">
            <li
              className={
                selectedAccState === true
                  ? "text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2"
                  : "text-center py-2  w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2"
              }
              onClick={goToAccounts}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span>Accounts</span>
            </li>
          </div> */}

          {/* ********* Log Out Icon *********  */}
          {/* <div className="flex justify-center">
            <li
              className="text-center py-2 flex w-72 p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2"
              onClick={signOutBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Log Out</span>{" "}
            </li>
          </div> */}
        </nav>
      </ul>
    </div>
  );
};

export default NavBar;
