import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./App.css";



import { Profile } from "../src/pages/Profile";
import { Questions } from "../src/pages/Questions";
import { Consultation } from "../src/pages/Consultation";

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/Consultation" element={<Consultation />} />
        </Routes>
      </Router>
    </div>
  );
};
