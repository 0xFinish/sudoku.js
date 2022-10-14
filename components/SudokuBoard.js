import { SudokuBoardCells } from "./SudokuBoardCells";
function SudokuBoard(props) {
  return (
    <div className="SudokuBoard">
      {props.cellValues.map((value, indexX) => {
        return value.map((eachValue, indexY) => {
          return (
            <SudokuBoardCells  cellValues={props.cellValues}updateValue={props.updateCellValues} key={indexY} val={eachValue} indexX={indexX} indexY={indexY}></SudokuBoardCells>
          );
        });
      })}
    </div>
  );
}

export { SudokuBoard };
