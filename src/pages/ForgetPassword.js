import React, { useState } from "react";
import Swal from "sweetalert2";
import ForgetPasswordImage from "../assets/images/forgetpassword.svg";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const ForgetPassword = () => {
  const [email, setEmailState] = useState("");
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const history = useHistory();

  const resetPassword = () => {
    setLoadingAnimation(true);

    setTimeout(() => {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          Swal.fire("", "Check your email for further instructions", "success");
          history.push("/loginpage");
        })
        .catch((error) => {
          const errorMessage = error.message;
          Swal.fire("", errorMessage, "error");
        }, setLoadingAnimation(false));
    }, 600);
  };

  return (
    <div>
      <div className=" min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen">
        <div className="p-1 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="shadow bg-white w-full rounded-lg divide-y divide-gray-200">
            <div className="px-10 py-10">
              <Link to="/loginpage">
                {" "}
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </Link>

              <div className="flex justify-center">
                <img
                  src={ForgetPasswordImage}
                  alt="forgetpassword"
                  className="mb-7 w-3/5"
                />
              </div>

              <h1 className="font-semibold text-center text-lg mb-3">
                Enter your email to reset your password
              </h1>

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Email
              </label>

              <div className="flex bg-gray-100 p-3 space-x-4 mb-7 mt-0.5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  color="gray"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <input
                  className="bg-gray-100 outline-none text-sm w-full"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setEmailState(e.target.value)}
                />
              </div>

              {/* <input
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmailState(e.target.value)}
              /> */}

              <button
                onClick={resetPassword}
                type="button"
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                {loadingAnimation === true ? (
                  <BeatLoader size={7} />
                ) : (
                  <span className="inline-block">Reset Password</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
