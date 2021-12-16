import React from "react";
//import WithJspiders from "../HOC/WithJspiders";
import { MyContext } from "./../ContextApi/ContextApi";

// const Btm = props => {
//   return (
//     <div>
//       <h1 style={{ backgroundColor: "red" }}>BTM Branch</h1>
//       <h1>{props.state}</h1>
//     </div>
//   );
// };

// export default WithJspiders(Btm);

const Btm = () => {
  return (
    <div>
      <h1>1st Way of consuming Global Context</h1>
      <MyContext.Consumer>
        {value => (
          <React.Fragment>
            <h1>{value.emp_name}</h1>
            <h1>{ value.emp_company}</h1>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    </div>
  );
};

export default Btm;
