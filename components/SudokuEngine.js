import React from 'react'

import { RestartButton } from "./RestartButton";
import { SudokuBoard } from "./SudokuBoard";
import { ValuesTemplate } from "./ValuesTemplate";
import { sudokuSolver, generate } from "./sudokuSolver"
import values from "./defaultValues"


function SudokuEngine(props) {
  let [cellValues, updateCellValues] = React.useState(values);

  React.useEffect(() => {
    updateCellValues(generate())
    console.log("useEffect running!")
  }, [])


  return (
    <div className="SudokuEngine">
      <SudokuBoard cellValues={cellValues} updateCellValues={updateCellValues}></SudokuBoard>
      <RestartButton cellValues={cellValues} updateCellValues={updateCellValues}></RestartButton>
      <ValuesTemplate updateCellValues={updateCellValues}></ValuesTemplate>
    </div>
  );
}

export { SudokuEngine };
