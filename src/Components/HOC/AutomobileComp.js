import React,{useState} from 'react'

const AutomobileComp = (UsedCars) => {
    return function CarModels() {
        let [state, setState] = useState([
          {
            Carname: "BMW-1",
            Color: "Red",
            location: "Basavangudi",
          },
          {
            Carname: "BMW",
            Color: "Blue",
            location: "Bangalore",
          },
          {
            Carname: "BMW",
            Color: "Black",
            location: "Whitefield",
          },
        ]);
        return <UsedCars state={ state}/>
    }



}

export default AutomobileComp
