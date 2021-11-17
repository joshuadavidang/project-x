import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SciencePage from "./pages/SciencePage";
import EnglishPage from "./pages/EnglishPage";
import MathPage from "./pages/MathPage";
import AccountsPage from "./pages/AccountsPage";
import DetailedContentPage from "./pages/DetailedData/DetailedContentPage";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
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
