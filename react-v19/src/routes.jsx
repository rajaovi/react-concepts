import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import NewHooks from "./pages/hook";
import UseTransition from "./pages/hook/useTransition";
import UseActionState from "./pages/hook/useActionState";

const RoutePage = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/hooks" element={<NewHooks />} />
      <Route path="/useTransition" element={<UseTransition />} />
      <Route path="/useactionstate" element={<UseActionState />} />
    </Routes>
  );
};

export default RoutePage;