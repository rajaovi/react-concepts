import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import LiftingState from "./pages/liftingState";
import UseMemo from "./pages/hooks/useMemo";
import UseCallBack from "./pages/hooks/useCallback";
import UseContext from "./pages/hooks/useContext";
import UseTransition from "./pages/hooks/useTransition";
import CustomHook from "./pages/hooks/customHook";
import UseReducer from "./pages/hooks/useReducer";
import Portals from "./pages/portals";
import LazySuspense from "./pages/lazySuspense";
import { Hooks } from "./pages/hooks";

const RoutePage = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/liftstate" element={<LiftingState />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/usememo" element={<UseMemo />} />
      <Route path="/usecallback" element={<UseCallBack />} />
      <Route path="/usecontext" element={<UseContext />} />
      <Route path="/usetransition" element={<UseTransition />} />
      <Route path="/customhook" element={<CustomHook />} />
      <Route path="/usereducer" element={<UseReducer />} />
      <Route path="/portals" element={<Portals />} />
      <Route path="/lazysuspense" element={<LazySuspense />} />
    </Routes>
  );
};

export default RoutePage;