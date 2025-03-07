import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import LiftingState from "./pages/liftingState";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lifitingstate" element={<LiftingState />} />
    </Routes>
  );
};

export default RoutePage;