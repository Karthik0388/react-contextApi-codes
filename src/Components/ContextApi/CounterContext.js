import React, { createContext, useState } from "react";

export let MyCounterContext = createContext(0);

let MyCounterProvider = ({ children }) => {
  let [count, setCount] = useState(0);

  let Increment = () => {
    setCount(prev => prev + 1);
  };
  let Decrement = () => {
    setCount(prev => prev - 1);
  };
  let Reset = () => {
    setCount(0);
  };
  return (
    <div>
      <MyCounterContext.Provider value={{ count, Increment, Decrement, Reset }}>
        {children}
      </MyCounterContext.Provider>
    </div>
  );
};

export default MyCounterProvider;
