import React, { useContext } from "react";
import { MyContext } from "./../ContextApi/ContextApi";

const RajajiNagar = () => {
  let {emp_name, emp_company }= useContext(MyContext);
  return (
    <div>
      <h1 style={{backgroundColor:"blue"}}>3rd Way of consuming Global Context</h1>
      <h1>{emp_name}</h1>
      <h1>{emp_company}</h1>
    </div>
  );
};

export default RajajiNagar;
