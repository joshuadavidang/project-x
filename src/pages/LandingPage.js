import React, { useEffect, useState } from "react";
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
  const contentData = useSelector((state) => state.contentReducer.value);
  console.log(contentData);

  useEffect(() => {
    if (getData.isAuthenticated == false) {
      /* eslint eqeqeq: 0 */
      // console.log("User not login");
      //history.push("/");
    }
  });

  const [Inventory, setInventory] = useState(false);
  const [Account, setAccount] = useState(false);

  const accountBtn = () => {
    setInventory(false);
    setAccount(true);
    dispatch(CONTENT_ACTION({ subject: "Account", isLoaded: true }));
  };

  const inventoryBtn = () => {
    setAccount(false);
    setInventory(true);
    dispatch(CONTENT_ACTION({ isLoaded: false }));
  };

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
          {/* ****** Navbar ****** */}
          <NavBar emailData={getData.email} />
        </aside>

        <main
          role="main"
          className="w-screen text-center h-screen overflow-hidden"
        >
          <div className="h-1/6 flex justify-end items-center space-x-8 pr-12">
            <div
              onClick={inventoryBtn}
              className={
                Inventory === true || contentData.isLoaded === false
                  ? "flex items-center space-x-2 cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white px-4 py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                  : "flex items-center space-x-2 cursor-pointer"
              }
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
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>

              <span className="font-mono">Inventory</span>
            </div>

            <div
              onClick={accountBtn}
              className={
                Account === true
                  ? "flex items-center space-x-2 cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white px-4 py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                  : "flex items-center space-x-2 cursor-pointer"
              }
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
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-mono">Account</span>
            </div>

            <div
              onClick={signOutBtn}
              className="flex items-center space-x-2 cursor-pointer"
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

              <span className="font-mono">Log Out</span>
            </div>
          </div>

          {/* ****** Main Content ****** (2 rows) */}
          <div className="h-5/6 flex justify-center items-end">
            <MainContent />
          </div>
        </main>
      </div>
    </>
  );
};

export default LandingPage;
