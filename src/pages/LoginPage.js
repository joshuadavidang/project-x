import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line
import app from "../firebase";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Login from "../assets/images/login.svg";
import BeatLoader from "react-spinners/BeatLoader";

// Redux
import { useSelector, useDispatch } from "react-redux"; // useSelect - access data from store |||| useDispatch - to send data to store
import { LOGIN_ACTION } from "../redux/reducers/authentication";

const LoginPage = () => {
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authenticationReducer.value);
  
  useEffect(() => {
    console.log("isAuthenticated: " + isAuthenticated);
    console.log(user);
  }, [isAuthenticated, user]);

  const loginBtn = () => {
    setLoadingAnimation(true);

    setTimeout(() => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user.email);
          dispatch(
            LOGIN_ACTION({
              avatarName: user.displayName,
              email: user.email,
              isAuthenticated: true,
              uid: user.uid,
            })
          );

          setIsAuthenticated(true);
          Swal.fire("", "Signed in successful", "success");
          history.push("/landingpage");

          // if (user.emailVerified === true) {
          //   setIsAuthenticated(true);
          //   Swal.fire("", "Signed in successful", "success");
          //   history.push("/landingpage");
          // } else {
          //   Swal.fire({
          //     text: "Please verify your email before attempting to login",
          //     icon: "warning",
          //     confirmButtonText: "OK",
          //   });
          // }
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
      <div className=" min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen">
        <div className="p-1 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="shadow bg-white w-full rounded-lg divide-y divide-gray-200">
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
                <img src={Login} alt="login" className="mb-7 w-3/5" />
              </div>

              <h1 className=" text-center text-lg mb-3 font-mono">
                Login to your account
              </h1>

              {/* <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Email
              </label> */}

              <div className="flex bg-gray-100 p-3 space-x-4 mb-6 rounded-lg">
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

              {/* <div className="md:grid grid-cols-2 gap-x-20">
                <div>
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">
                    Password
                  </label>
                </div>

                <div className="mb-1">
                  <label className="text-sm text-green-600 font-mono">
                    <Link to="/forgetpassword"> Forgot Password?</Link>
                  </label>
                </div>
              </div> */}

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
                  placeholder="Enter password"
                  onChange={(e) => setPasswordState(e.target.value)}
                  className="bg-gray-100 outline-none text-sm w-full"
                />
              </div>

              <button
                onClick={loginBtn}
                type="button"
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                {loadingAnimation === true ? (
                  <BeatLoader size={7} color={"white"} />
                ) : (
                  <span className="inline-block">Login</span>
                )}
              </button>

              <p className="text-center pt-7 text-gray-600 text-sm font-mono">
                Don't have an account? Register{" "}
                <Link to="/signup">
                  <span className="hover:text-green-400 font-bold">here</span>
                </Link>
              </p>

              <div className='text-center mt-2'>
                <label className="text-sm text-green-600 font-mono">
                  <Link to="/forgetpassword"> Reset Password</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
