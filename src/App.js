import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Profile } from "../src/pages/Profile";
import { Questions } from "../src/pages/Questions";
import { Consultation } from "../src/pages/Consultation";
import { Confirmation } from "../src/pages/Confirmation";
// import { TestPage } from "./pages/TestPage";

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/Consultation" element={<Consultation />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          {/* <Route path="/TestPage" element={<TestPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};
