import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Redux from "./pages/redux";

const RoutePage = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/redux" element={<Redux />} />
    </Routes>
  );
};

export default RoutePage;