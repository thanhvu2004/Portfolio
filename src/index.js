import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Main from "./Main";
import PersonalData from "./PersonalData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<PersonalData />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
