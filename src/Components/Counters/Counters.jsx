import React from 'react'
import ReducerContextProvider from '../ContextApi/ReducerContext'
import { useContext } from 'react';
const Counters = () => {
    let { state, Increment, Decrement, Reset } = useContext(
      ReducerContextProvider
    );
    return (
        <div>
            
        </div>
    )
}

export default Counters
