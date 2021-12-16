import React, { useContext } from "react";
import { MyCounterContext } from "./../ContextApi/CounterContext";

const Counter = () => {
  let { count, Increment, Decrement, Reset } = useContext(MyCounterContext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Counter;
