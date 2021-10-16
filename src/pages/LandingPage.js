import React from "react";
import Joshua from "../assets/images/joshua.jpeg";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const LandingPage = () => {
  let history = useHistory();

  const signOutBtn = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");

        Swal.fire("", "Logout successful", "success");
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col  w-64 h-screen px-4 text-white ">
        <div className="flex justify-center m-8">
          <img src={Joshua} className=" w-20 h-20 rounded-full" />
        </div>

        <div className="m-2 cursor-pointer">
          <ul>
            <li className="text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg">
              <span>English</span>
            </li>
          </ul>

          <ul>
            <li className="text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg">
              <span>Math</span>
            </li>
          </ul>

          <ul>
            <li className="text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg">
              <span>Science</span>
            </li>
          </ul>

          <ul onClick={signOutBtn}>
            <li className="text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg">
              <span>Log Out</span>
            </li>
          </ul>
        </div>
      </nav>

      {/* <div className="bg-white-200 min-h-screen">
        <div className="grid grid-cols-2">
          <div className="justify-center flex items-center">
            <img src={Lesson} alt="lesson" width="60%" />
          </div>

          <div className="bg-gray-50">
            <div className="grid grid-rows-3 grid-flow-col justify-center flex items-center min-h-screen">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 bg-red-200 text-xl px-24 py-4 rounded-full py-3 px-6">
                <p className="text-center text-white">English</p>
              </div>

              <div className="bg-gradient-to-r from-green-400 to-blue-500 bg-red-200 text-xl px-24 py-4 rounded-full py-3 px-6">
                <p className="text-center text-white">Math</p>
              </div>

              <div className="bg-gradient-to-r from-green-400 to-blue-500 bg-red-200 text-xl px-24 py-4 rounded-full py-3 px-6">
                <p className="text-center text-white">Science</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
