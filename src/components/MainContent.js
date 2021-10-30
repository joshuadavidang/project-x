import React from "react";
import { useSelector } from "react-redux"; // to access state data, to dispatch data
import EnglishPage from "../pages/EnglishPage";
import MathPage from "../pages/MathPage";
import Welcome from "./Welcome";

const MainContent = () => {
  const getData = useSelector((state) => state.contentReducer.value);
  console.log(getData);

  return (
    <div>
      {getData.subject === "English" && getData.isLoaded === true ? (
        <EnglishPage />
      ) : getData.subject === "Math" && getData.isLoaded === true ? (
        <MathPage />
      ) : getData.isLoaded === false ? (
        <Welcome />
      ) : (
        <p>Error 404, no pages found </p>
      )}
    </div>
  );
};

export default MainContent;
