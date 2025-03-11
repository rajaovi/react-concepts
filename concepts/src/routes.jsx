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
import Redux from "./pages/redux";
import UseState from "./pages/hooks/useState";
import UseEffect from "./pages/hooks/useEffect";
import UseLayoutEffect from "./pages/hooks/useLayoutEffect";

const RoutePage = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/liftstate" element={<LiftingState />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/usestate" element={<UseState />} />
      <Route path="/usereducer" element={<UseReducer />} />
      <Route path="/usecontext" element={<UseContext />} />
      <Route path="/useeffect" element={<UseEffect />} />
      <Route path="/usememo" element={<UseMemo />} />
      <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
      <Route path="/usecallback" element={<UseCallBack />} />
      <Route path="/usetransition" element={<UseTransition />} />
      <Route path="/customhook" element={<CustomHook />} />
      <Route path="/portals" element={<Portals />} />
      <Route path="/lazysuspense" element={<LazySuspense />} />
      <Route path="/redux" element={<Redux />} />
    </Routes>
  );
};

export default RoutePage;