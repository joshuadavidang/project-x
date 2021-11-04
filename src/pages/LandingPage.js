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
      <div className="flex flex-row">
        <aside className="w-auto bg-white h-screen">
          <NavBar emailData={getData.email} />
        </aside>

        <main role="main" className="w-5/6 h-screen text-center">
          <MainContent />
        </main>
      </div>
    </>
  );
};

export default LandingPage;
