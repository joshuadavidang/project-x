import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
// eslint-disable-next-line
import app from "../firebase";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";
import SignUp from "../assets/images/signup.svg";

const SignUpPage = () => {
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");

  // useEffect(() => {
  //   console.log(isAuthenticated);
  // }, []);

  let history = useHistory();

  const signUpBtn = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser).then(() => {
          Swal.fire(
            {
              text: "Click on the link in your email to verify your account.",
              icon: "info",
              confirmButtonText: "OK",
            },
            history.push("/")
          );
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: errorMessage,
          text: "Please try again",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div>
      <div className="min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center overflow-y-hidden">
        <div className="p-1 xs:p-0 mx-auto md:w-full md:max-w-md">
          {/* <h1 className="font-bold text-center text-2xl mb-5">Project X</h1> */}
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-10 py-10">
              <Link to="/">
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
                <img src={SignUp} alt="sign up" className="mb-7 w-3/5" />
              </div>

              <h1 className="font-semibold text-center text-lg mb-5">
                Sign up for an account
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
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPasswordState(e.target.value)}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />

              <button
                onClick={signUpBtn}
                type="button"
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block">Sign Up</span>
              </button>

              <p className="text-center pt-7 text-gray-600">
                Have an account? Login{" "}
                <Link to="/">
                  <span className="hover:text-green-400 font-bold">here</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
