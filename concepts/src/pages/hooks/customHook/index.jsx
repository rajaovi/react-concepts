import React from "react";
import Header from "../../../components/header";
import FetchApi from "./fetchApi";
import UseDebounce from "./useDebounce";

export default function CustomHook() {
  return (
    <>
      <Header title="Custom Hook" page="Hooks" toPage="/hooks" />
      {/* <FetchApi /> */}
      <UseDebounce />
    </>
  );
}
