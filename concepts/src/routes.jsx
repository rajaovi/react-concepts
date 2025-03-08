import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import LiftingState from "./pages/liftingState";
import UseMemo from "./pages/hooks/useMemo";
import UseCallBack from "./pages/hooks/useCallback";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liftstate" element={<LiftingState />} />
      <Route path="/usememo" element={<UseMemo />} />
      <Route path="/usecallback" element={<UseCallBack />} />
    </Routes>
  );
};

export default RoutePage;