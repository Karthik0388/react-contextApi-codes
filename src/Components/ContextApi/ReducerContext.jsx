import React, { createContext, useReducer } from 'react'

export let ReducerContextApi = createContext();
let initialSate = { count: 0 }
let reducer = (state,action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
       new Error ("error")
    }
}

const ReducerContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialSate);

    let Increment = () => {
        dispatch({type:"increment"})
    }
     let Decrement = () => {
       dispatch({ type: "decrement" });
    };
     let Reset = () => {
       dispatch({ type: "reset" });
     };
    return (
        <div>
            <ReducerContextApi.Provider value={{state,Increment,Decrement,Reset}}>
                {children}
            </ReducerContextApi.Provider>
        </div>
    )
}

export default ReducerContextProvider;
