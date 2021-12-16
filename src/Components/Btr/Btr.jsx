import React,{Component} from 'react'
//import WithJspiders from '../HOC/WithJspiders'
import { MyContext } from './../ContextApi/ContextApi';

// const Btr = (props) => {
//     return (
//         <div>
//             <h1 style={{backgroundColor:"blue"}}>BTR Branch</h1>
//             <h1>{props.state.trainer}</h1>
//         </div>
//     )
// }

// export default WithJspiders(Btr)



 class Btr extends Component {
     render() {
         let { emp_name, emp_company } = this.context;
        return (
          <div>
            <h1>2nd Way of consuming Global Context</h1>
            <h1>{emp_name}</h1>
            <h1>{emp_company}</h1>
          </div>
        );
    }
}

export default Btr;

Btr.contextType = MyContext;

