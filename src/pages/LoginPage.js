import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line
import app from "../firebase";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
// import { css } from "@emotion/react";
// import PulseLoader from "react-spinners/ClipLoader";

const LoginPage = () => {
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    console.log(isAuthenticated);
  }, []);

  let history = useHistory();

  const loginBtn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });

        history.push("/landingpage");
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
      <div className="min-h-screen w-screen bg-gray-200 flex flex-col justify-center ">
        <div className="p-1 xs:p-0 mx-auto md:w-full md:max-w-md">
          {/* <h1 className="font-bold text-center text-2xl mb-5">Project X</h1> */}
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-10 py-10">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Email
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
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
                onClick={loginBtn}
                type="button"
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block">Login</span>
              </button>

              <p className="text-center pt-7 text-gray-600">
                Don't have an account? Register{" "}
                <Link to="/signuppage">
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
