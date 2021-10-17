import React, { useState } from "react";
import Swal from "sweetalert2";
import ForgetPasswordImage from "../assets/images/forgetpassword.svg";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useHistory } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmailState] = useState("");

  let history = useHistory();

  const resetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        Swal.fire("", "Check your email for further instructions", "success");
        history.push('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire("", errorMessage, "error");
      });
  };
  return (
    <div>
      <div className=" min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center">
        <div className="p-1 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="shadow bg-white w-full rounded-lg divide-y divide-gray-200">
            <div className="px-10 py-10">
              <div className="flex justify-center">
                <img
                  src={ForgetPasswordImage}
                  alt="forgetpassword"
                  className="mb-7 w-3/5"
                />
              </div>

              <h1 className="text-center text-sm mb-3">
                Enter your email below to reset your password.
              </h1>

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Email
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmailState(e.target.value)}
              />

              <button
                onClick={resetPassword}
                type="button"
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block">Reset Password</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
