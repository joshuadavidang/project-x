import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux"; // to access state data, to dispatch data
import { LOGOUT_ACTION } from "../redux/reducers/authentication";

const NavBar = ({ emailData }) => {
  const history = useHistory();
  const dispatch = useDispatch();

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
                email: emailData,
                isAuthenticated: false,
                message: "User signed out",
              })
            );
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
    <div>
      <ul className="flex flex-col overflow-hidden">
        <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col h-screen px-4 text-white rounded-r-3xl">
          <div className="flex justify-center m-8">
            <Avatar name={emailData} size="100" round={true} />
          </div>

          <div className="text-center">
            <span>{emailData}</span>
          </div>

          <div className="m-2 cursor-pointer">
            <ul onClick={() => alert("Under Construction")}>
              <li className="text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg">
                <span>English</span>
              </li>
            </ul>

            <ul onClick={() => alert("Under Construction")}>
              <li className="text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg">
                <span>Math</span>
              </li>
            </ul>

            <ul onClick={() => alert("Under Construction")}>
              <li className="text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg">
                <span>Science</span>
              </li>
            </ul>

            <button
              onClick={signOutBtn}
              type="button"
              className="bg-gradient-to-r from-blue-600 to-blue-500 
                hover:from-red-500 hover:to-yellow-500 text-white w-full rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mt-12"
            >
              <li className="text-center py-3">
                <span>Log Out</span>
              </li>
            </button>
          </div>
        </nav>
      </ul>
    </div>
  );
};

export default NavBar;
