import React from 'react'

import { RestartButton } from "./RestartButton";
import { SudokuBoard } from "./SudokuBoard";
import { ValuesTemplate } from "./ValuesTemplate";
import { sudokuSolver, generate } from "./sudokuSolver"
import values from "./defaultValues"


function SudokuEngine(props) {
  const [cellValues, updateCellValues] = React.useState(values);

  const [isNotSolvable, setIsNotSolvable] = React.useState(false)


  React.useEffect(() => {
    updateCellValues(generate())
    console.log("useEffect running!")
  }, [])


  return (
    <div className="SudokuEngine">
      <SudokuBoard cellValues={cellValues} updateCellValues={updateCellValues}></SudokuBoard>
      <RestartButton setIsNotSolvable={setIsNotSolvable} updateCellValues={updateCellValues}></RestartButton>
      <ValuesTemplate updateCellValues={updateCellValues}></ValuesTemplate>
      {isNotSolvable && <p className='notsolvable'>The number you entered is not solvable!</p>}
    </div>
  );
}

export { SudokuEngine };
