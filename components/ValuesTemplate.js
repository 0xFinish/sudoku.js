import React from "react";
import { NumberValues } from "./NumberValues";

function ValuesTemplate(props) {
  
  // React.useEffect(() => {
  //   console.log("Updating cell values")
  //   function addInitialValues(prev) {
  //     let createdValues = prev
  //     let amountOfInitialValues = 40
  //     for (let i = 0; i < amountOfInitialValues; i++) {
  //       createdValues[Math.floor(Math.random() * 80)] = Math.floor(Math.random() * 9)
  //     }
  //     console.log(createdValues)
  //     return createdValues
  //   }
  //   props.updateCellValues(prev => addInitialValues(prev))
  // }, [])

  React.useEffect(() => {
    // props.updateCellValues(prev => [1,42,33])
  }, [])

  return (
    <div className="ValuesTemplate">
      <NumberValues num={1} updateCellValues={props.updateCellValues}></NumberValues>
      <NumberValues num={2} updateCellValues={props.updateCellValues}></NumberValues>
      <NumberValues num={3} updateCellValues={props.updateCellValues}></NumberValues>
      <NumberValues num={4} updateCellValues={props.updateCellValues}></NumberValues>
      <NumberValues num={5} updateCellValues={props.updateCellValues}></NumberValues>
      <NumberValues num={6} updateCellValues={props.updateCellValues}></NumberValues>
      <NumberValues num={7} updateCellValues={props.updateCellValues}></NumberValues>
      <NumberValues num={8} updateCellValues={props.updateCellValues}></NumberValues>
      <NumberValues num={9} updateCellValues={props.updateCellValues}></NumberValues>
    </div>
  );
}

export { ValuesTemplate };
