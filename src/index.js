import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgetPassword from "./pages/ForgetPassword";
import SciencePage from "./pages/SciencePage";
import EnglishPage from "./pages/EnglishPage";
import MathPage from "./pages/MathPage";
import AccountsPage from "./pages/AccountsPage";
import PreLoginPage from "./pages/PreLoginPage";
import DetailedContentPage from "./pages/DetailedData/DetailedContentPage";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/project-x">
      <Routes>
        {/* Routes without Nav Side Bar */}
        <Route path="/" element={<PreLoginPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* Routes with Nav Side Bar */}
        <Route path="/app" element={<App />}>
          {/* Children Route Component */}
          <Route path="sciencepage" element={<SciencePage />} />
          <Route
            path="sciencepage/:themeId"
            element={<DetailedContentPage />}
          />
          <Route path="englishpage" element={<EnglishPage />} />
          <Route path="mathpage" element={<MathPage />} />
          <Route path="accountspage" element={<AccountsPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
