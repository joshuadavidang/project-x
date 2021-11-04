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
import BeatLoader from "react-spinners/BeatLoader";

const SignUpPage = () => {
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");
  const [loadingAnimation, setLoadingAnimation] = useState(false);

  // useEffect(() => {
  //   console.log(isAuthenticated);
  // }, []);

  let history = useHistory();

  const signUpBtn = () => {
    setLoadingAnimation(true);

    setTimeout(() => {
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
              history.push("/loginpage")
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
        }, setLoadingAnimation(false));
    }, 600);
  };

  return (
    <div>
      <div className="min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center overflow-y-hidden bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen">
        <div className="p-1 xs:p-0 mx-auto md:w-full md:max-w-md">
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
                <img src={SignUp} alt="sign up" className="mb-3 w-3/5" />
              </div>

              <h1 className="font-semibold text-center text-lg mb-3">
                Sign up for an account
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
                  placeholder="New email"
                  onChange={(e) => setEmailState(e.target.value)}
                />
              </div>

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>

              <div className="flex bg-gray-100 p-3 space-x-4 mb-7 mt-0.5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  color="gray"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>

                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="New password"
                  onChange={(e) => setPasswordState(e.target.value)}
                  className="bg-gray-100 outline-none text-sm w-full"
                />
              </div>
              <button
                onClick={signUpBtn}
                type="button"
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                {loadingAnimation === true ? (
                  <BeatLoader size={7} />
                ) : (
                  <span className="inline-block">Register</span>
                )}
              </button>

              <p className="text-center pt-7 text-gray-600">
                Have an account? Login{" "}
                <Link to="/loginpage">
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
