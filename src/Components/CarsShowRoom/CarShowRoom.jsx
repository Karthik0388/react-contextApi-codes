import React from 'react'
import AutomobileComp from '../HOC/AutomobileComp'
const CarShowRoom = (props) => {
    let mapCars = props.state.map((car) => {
    <ul>
      <li>{car.Carname}</li>
      <li>{car.Color}</li>
      <li>{car.location}</li>
    </ul>;
})
    return (
        <div>
            <h1>CarShowRoom Basavangudi</h1>
            <p>{ mapCars}</p>
        </div>
    )
}

export default AutomobileComp(CarShowRoom);
