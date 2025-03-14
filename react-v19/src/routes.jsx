import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import NewHooks from "./pages/hook";
import UseTransition from "./pages/hook/useTransition";

const RoutePage = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/hooks" element={<NewHooks />} />
      <Route path="/useTransition" element={<UseTransition />} />
    </Routes>
  );
};

export default RoutePage;