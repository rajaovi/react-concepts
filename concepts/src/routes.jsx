import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import LiftingState from "./pages/liftingState";
import UseMemo from "./pages/hooks/useMemo";
import UseCallBack from "./pages/hooks/useCallback";
import UseContext from "./pages/hooks/useContext";
import UseTransition from "./pages/hooks/useTransition";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liftstate" element={<LiftingState />} />
      <Route path="/usememo" element={<UseMemo />} />
      <Route path="/usecallback" element={<UseCallBack />} />
      <Route path="/usecontext" element={<UseContext />} />
      <Route path="/usetransition" element={<UseTransition />} />
    </Routes>
  );
};

export default RoutePage;