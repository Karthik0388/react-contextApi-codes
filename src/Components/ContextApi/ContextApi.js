import React from "react";
import { createContext } from "react";

export let MyContext = createContext();

let ContextProvider =({children}) => {
  return (
    <MyContext.Provider
      value={{ emp_name: "Karthik", emp_company: "TestYantra" }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
