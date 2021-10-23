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
          dispatch(LOGIN_ACTION({ email: user.email, isAuthenticated: true }));

          if (user.emailVerified === true) {
            setIsAuthenticated(true);
            Swal.fire("", "Signed in successful", "success");
            history.push("/landingpage");
          } else {
            Swal.fire({
              text: "Please verify your email before attempting to login",
              icon: "warning",
              confirmButtonText: "OK",
            });
          }
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
      <div className=" min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center">
        <div className="p-1 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="shadow bg-white w-full rounded-lg divide-y divide-gray-200">
            <div className="px-10 py-10">
              <div className="flex justify-center">
                <img src={Login} alt="login" className="mb-7 w-3/5" />
              </div>

              <h1 className="font-semibold text-center text-lg mb-3">
                Login to your account
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

              <div className="md:grid grid-cols-2 gap-x-32">
                <div>
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">
                    Password
                  </label>
                </div>

                <div>
                  <label className="text-sm text-green-600">
                    <Link to="/forgetpassword"> Forgot Password?</Link>
                  </label>
                </div>
              </div>

              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPasswordState(e.target.value)}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />

              <button
                onClick={loginBtn}
                type="button"
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                {loadingAnimation === true ? (
                  <BeatLoader size={7} />
                ) : (
                  <span className="inline-block">Login</span>
                )}
              </button>

              <p className="text-center pt-7 text-gray-600">
                Don't have an account? Register{" "}
                <Link to="/signup">
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

export default LoginPage;
