import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  // sendEmailVerification,
} from "firebase/auth";
// eslint-disable-next-line
import app from "../firebase";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";
import BeatLoader from "react-spinners/BeatLoader";
import AvatarSwiper from "../components/AvatarSwiper";

const SignUpPage = () => {
  // eslint-disable-next-line
  const [avatar, setAvatar] = useState("");
  const [avatarName, setAvatarName] = useState("");
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");
  const [loadingAnimation, setLoadingAnimation] = useState(false);

  // useEffect(() => {
  //   console.log(isAuthenticated);
  // }, []);

  let history = useHistory();

  const signUpBtn = () => {
    setLoadingAnimation(true);
    setAvatar("figuring out");

    setTimeout(() => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            photoURL: 'incoming',
            displayName: avatarName,
          });

          Swal.fire("", "Account registered", "success");
          history.push("/loginpage");

          // sendEmailVerification(auth.currentUser).then(() => {
          //   Swal.fire(
          //     {
          //       text: "Click on the link in your email to verify your account.",
          //       icon: "info",
          //       confirmButtonText: "OK",
          //     },
          //     history.push("/loginpage")
          //   );
          // });
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
                <AvatarSwiper />
              </div>

              <h1 className="font-mono text-center text-lg mb-6 mt-8">
                Sign up for an account
              </h1>

              {/* Avatar's Name */}
              {/* <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Give your avatar a name
              </label> */}

              <div className="flex bg-gray-100 p-3 space-x-4 mb-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color="gray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <input
                  className="bg-gray-100 outline-none text-sm w-full"
                  type="text"
                  name="avatarName"
                  value={avatarName}
                  placeholder="Give your avatar a name"
                  onChange={(e) => setAvatarName(e.target.value)}
                />
              </div>

              {/* Email */}
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                {/* Email */}
              </label>

              <div className="flex bg-gray-100 p-3 space-x-4 mb-3 rounded-lg">
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

              {/* Password */}
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                {/* Password */}
              </label>

              <div className="flex bg-gray-100 p-3 space-x-4 mb-7 rounded-lg">
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
                hover:from-pink-500 hover:to-yellow-500 text-white w-full py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                {loadingAnimation === true ? (
                  <BeatLoader size={7} color={"white"} />
                ) : (
                  <span className="inline-block tracking-wider">Register</span>
                )}
              </button>

              <p className="text-center pt-7 text-gray-600 font-mono text-sm">
                Have an account? Login{" "}
                <Link to="/loginpage">
                  <span className="hover:text-green-400 underline font-bold">
                    here
                  </span>
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
