import React, { useState } from "react";

const WithJspiders = (WrappedComponent) => {
  return function Courses() {
    let [state, setState] = useState({
      coursename: "MernStack",
      trainer: "Shashi",
      duration: "5months",
      
    });
    return <WrappedComponent state={state} />;
  };
};

export default WithJspiders;
