import React, { useState } from "react";
// import { getAuth, signOut } from "firebase/auth";
// import Swal from "sweetalert2";
// import Avatar from "react-avatar";
// import { useSelector } from "react-redux"; // to access state data, to dispatch data
import { useNavigate } from "react-router";
// import { LOGOUT_ACTION } from "../redux/reducers/authentication";
// import { CONTENT_ACTION } from "../redux/reducers/content";
import AvatarSwiper from "./AvatarSwiper";

const NavBar = ({ avatarData }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const contentData = useSelector((state) => state.contentReducer.value);

  const [selectedEngBtnState, setSelectedEngBtnState] = useState(false);
  const [selectedMathBtnState, setSelectedMathBtnState] = useState(false);
  const [selectedScienceState, setSelectedScienceState] = useState(false);

  const ScienceBtn = () => {
    setSelectedScienceState(true);
    setSelectedMathBtnState(false);
    setSelectedEngBtnState(false);
    navigate("/sciencepage");
  };

  const EnglishBtn = () => {
    setSelectedEngBtnState(true);
    setSelectedMathBtnState(false);
    setSelectedScienceState(false);
    navigate("/englishpage");
  };

  const MathBtn = () => {
    setSelectedMathBtnState(true);
    setSelectedEngBtnState(false);
    setSelectedScienceState(false);
    navigate("/mathpage");
  };

  return (
    <div>
      <ul className="flex flex-col overflow-hidden">
        {/* <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col h-4/5 px-4 py-4 mt-6 ml-9 text-white rounded-3xl "> */}
        <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col h-screen px-4 text-white rounded-r-3xl ">
          <div className="flex justify-center m-8">
            <AvatarSwiper />
          </div>
          <div className="text-center mb-6">
            <span className="font-bold font-mono">Hey,</span>{" "}
            <span className="font-mono">
              {avatarData} {""} 👋
            </span>{" "}
          </div>

          {/* ********* Science Icon ********* */}
          <div className="flex justify-center">
            <li
              className={
                selectedScienceState === true &&
                selectedMathBtnState === false &&
                selectedEngBtnState === false
                  ? "text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2"
                  : "text-center py-2 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2"
              }
              onClick={ScienceBtn}
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
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>

              <span className="font-mono">Science</span>
            </li>
          </div>

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
        </nav>
      </ul>
    </div>
  );
};

export default NavBar;
