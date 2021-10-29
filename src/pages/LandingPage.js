import React, { useEffect } from "react";
import { useSelector } from "react-redux"; // to access state data, to dispatch data
// import { useHistory } from "react-router-dom";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";

const LandingPage = () => {
  // const history = useHistory();
  const getData = useSelector((state) => state.authenticationReducer.value);
  console.log(getData);

  useEffect(() => {
    if (getData.isAuthenticated == false) {
      /* eslint eqeqeq: 0 */
      // console.log("User not login");
      //history.push("/");
    }
  });

  return (
    <>
      <div className="flex flex-row flex-wrap">
        <aside className="w-full sm:w-1/4 md:w-2/6 xl:w-1/6 bg-gray-200">
          <NavBar emailData={getData.email} />
        </aside>

        <main
          role="main"
          className="w-full sm:w-3/4 md:w-4/6 xl:w-5/6 text-center bg-gray-200"
        >
          <MainContent />
        </main>
      </div>
    </>
  );
};

export default LandingPage;
