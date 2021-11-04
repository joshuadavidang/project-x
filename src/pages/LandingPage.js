import React, { useEffect } from "react";
import { useSelector } from "react-redux"; // to access state data, to dispatch data
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux"; // to access state data, to dispatch data
import { LOGOUT_ACTION } from "../redux/reducers/authentication";
import { CONTENT_ACTION } from "../redux/reducers/content";

const LandingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.authenticationReducer.value);
  console.log(getData);

  useEffect(() => {
    if (getData.isAuthenticated == false) {
      /* eslint eqeqeq: 0 */
      // console.log("User not login");
      //history.push("/");
    }
  });

  const signOutBtn = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Logout?",
          text: "You will be signed out",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("", "Logout successful", "success");
            // Sign-out successful.
            dispatch(
              LOGOUT_ACTION({
                email: getData.email,
                isAuthenticated: false,
                message: "User signed out",
              })
            );
            dispatch(CONTENT_ACTION({ isLoaded: false }));
            history.push("/");
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire("Welcome back", "", "success");
          }
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="flex">
        <aside className="w-auto bg-white h-screen">
          <NavBar emailData={getData.email} />
        </aside>

        <main role="main" className="w-screen text-center h-screen">
          <div className="h-5/6 flex justify-center items-center">
            <MainContent />
          </div>

          <div className="bg-gray-100 h-1/6 flex justify-end items-center space-x-12 pr-12">
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span>Inventory</span>
            </div>

            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Account</span>
            </div>

            <div
              onClick={signOutBtn}
              className="flex items-center space-x-3 cursor-pointer"
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span>Log Out</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LandingPage;
