import React from "react";
import { LoaderSpinner, LoaderWrapper } from "./LoaderStyle";

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderSpinner color="#bf3939" height={100} width={100} />
    </LoaderWrapper>
  );
};

export default Loader;
