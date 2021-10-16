import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line
import app from "../firebase";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log(isAuthenticated);
  }, []);

  let history = useHistory();

  const signUpBtn = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
          title: "Signed up successfully",
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
                onClick={signUpBtn}
                type="button"
                className="transition duration-200 bg-red-500 hover:bg-red-600 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block">Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
